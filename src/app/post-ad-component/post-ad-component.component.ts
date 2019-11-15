import { Component, OnInit } from '@angular/core';
import { ImageProperty } from '../models/imageProperty';
import { DatePipe } from '@angular/common';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpEventType, HttpResponse, } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
import { ImageService } from '../services/ad-image.service';
import { ProductImages } from '../models/ProductImages';

@Component({
  selector: 'app-post-ad-component',
  templateUrl: './post-ad-component.component.html',
  styleUrls: ['./post-ad-component.component.css']
})

export class PostAdComponentComponent implements OnInit {
  isMock = environment.isMockingEnabled;
  minNoOfImage = 1;
  maxNoOfImage = 5;
  isAddressSelected: boolean = false;
  imageArray: ImageProperty[] = [];
  serverUrl = environment.imageApiSettings.BaseUrl; //the root url of the server
  atleastOneImage = true;
  allowSubmit = false;
  invalidImage = false;
  connectionError = false;
  errMsg = "";
  categories = ["Property", "Car", "Furniture", "Mobile", "Bike", "Book", "Fashion", "Electronic", "Other"]; // this is provided by categories api
  states = ["Andra Pradesh", "Go", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka",
    "Kerala", "Madya Pradesh", "Maharashtra", "Punjab", "Rajasthan"];
  //properties of html element 
  addressDisplayValue = "none";
  purchaseDate = "none";
  imageCounter = 1;
  productModel: Product;
  productImages: ProductImages;
  date = new Date();
  latest_date = this.datepipe.transform(this.date, 'yyyy-MM-dd');
  productId: string;
  btnDispText: string;

  constructor(
    private imageService: ImageService,
    private router: Router,
    public datepipe: DatePipe,
    private productService: ProductService,
    public http: HttpClient,
    public sanatizer: DomSanitizer,
    private activatedRoute: ActivatedRoute
  ) { } //use for validation of date 

  ngOnInit() {
    window.scroll(0, 0);
    let image = new ImageProperty();
    this.imageArray.push(image);
    this.productModel = new Product();
    this.productImages = new ProductImages();

    if (this.router.url.includes("/update-ad")) {
      this.activatedRoute.params.subscribe(params => {
        this.productId = params['id'];
      });

      this.productService.getProductDetails(this.productId).subscribe(
        response => {
          this.productModel = response.product;
        }
      );

      if (this.productModel.pickupAddress.line1) {
        this.isAddressSelected = true;
        this.addressDisplayValue = "block";
        this.btnDispText = "Update";
      }
    } else {
      this.productId = null;
      this.btnDispText = "Submit";
    }
  }

  PostProduct() {
    this.productImages.HeroImageUrl = this.productModel.heroImage;
    this.productImages.ImageUrls = this.productModel.images;
    if (!this.isMock)
      this.imageService.storeImages(this.productImages).subscribe();
    this.productService.AddProduct(this.productModel).subscribe(
      response => {
        this.productService.sendProductObj(response);
        if (response.id != null && response.id.trim() != "") {
          this.router.navigate(['products/details', response.id], { queryParams: { preview: 'true' } });
        }
        else {
          alert("Something went wrong");
        }
      },
      err => {
        alert("Oops, something went wrong, Please try again later.");
        console.log(err.error);
      }
    );
  }

  updateProduct() {
    this.productService.updateProduct(this.productModel).subscribe(
      response => {

      },
      err => {
        alert("Oops, something went wrong, Please try again later.");
        console.log(err.error);
      }
    );
  }

  validateDate(id) {
    var userDate = id.target.value;
    if (userDate > this.latest_date) {
      this.purchaseDate = "block";
    } else {
      this.purchaseDate = "none";
    }
  }

  validateAddress(event) {
    if (event.target.checked) {
      this.addressDisplayValue = "block";
      this.isAddressSelected = true;
    }
    else {
      this.addressDisplayValue = "none"
      this.isAddressSelected = false;
    }
  }

  imageLoader(id) {
    this.imageArray[id].crossBtnValue = "none";
    this.imageArray[id].imageDisplayValue = "none";
    this.imageArray[id].addEditProperty = "none";
    this.imageArray[id].pictureContainerStyle = "1px solid lightgrey";
    this.imageArray[id].heroImage = "none";
    this.imageArray[id].imageLoaderProperty = "";
  }

  isValidImage(file): boolean {
    var validFormats = ['jpg', 'jpeg', 'png'];
    let fName = file.name;
    var ext = fName.substr(fName.lastIndexOf('.') + 1);
    if (ext == '')
      return false;
    if (validFormats.indexOf(ext) == -1) {
      return false;
    }
    return true;
  }

  incrementProgressBar(id, event): void {
    const percentDone = Math.round(100 * event.loaded / event.total);
    this.imageArray[id].ProgressBarDispProp = "";
    console.log(`File is ${percentDone}% uploaded.`);
    this.imageArray[id].uploadedPercent = percentDone;
  }

  getImageUrl(event): string {
    let imageUrl = "";
    let safeUrl;
    console.log('File is completely uploaded!');
    imageUrl = this.serverUrl + event.body.imageUrl;
    console.log("recieved image url: " + imageUrl);
    safeUrl = this.sanatizer.bypassSecurityTrustUrl(imageUrl);  // to bypass sanatization of local url
    return safeUrl;
  }

  uploadImage(event, id) {
    this.imageService.uploadImage(event.target.files[0])
      .subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.incrementProgressBar(id, event);
          }
          else if (event instanceof HttpResponse) {
            this.imageArray[id].imageURL = this.getImageUrl(event);
            this.productModel.images.push(event.body.imageUrl); //storing only the name of the file not the url as it may change on the server side
            this.imageArray[id].ProgressBarDispProp = "none";
            if (id == 0) {
              this.selectHeroImg(id);
              this.imageArray[0].heroImage = "";
            }
          }
        },
        error => {
          this.removeImage(id);
          this.errMsg = "Server Unreachable or Encountered an Error, Please try later.";
          this.connectionError = true;
          if (error.error != null && error.error.Message != undefined && error.error.Message != undefined) {
            this.errMsg = error.error.Message;
            this.connectionError = false;
            if (error.error.Code == 415) {
              this.invalidImage = true;
              this.errMsg = "Invalid File Format. Please Upload Images(jpg, jpeg, png) only.";
            }
          }

          console.log("Upload Failed\n Error: " + this.errMsg);
        }
      );
  }

  addImage(id, event) {
    var err = false;
    this.imageLoader(id);
    this.invalidImage = false;
    this.connectionError = false;

    if (this.isMock) {
      this.imageArray[id].imageURL = environment.imageApiSettings.mockImageUrl;
      this.productModel.images.push(environment.imageApiSettings.mockImageUrl);
      if (id == 0) {
        this.selectHeroImg(id);
      }
    }

    else if (this.isValidImage(event.target.files[0])) {
      this.uploadImage(event, id);
    }
    else // if UI stops a non-image file upload
    {
      err = true;
      this.invalidImage = true;
      this.errMsg = "Invalid File Format. Please Upload Images(jpg, jpeg, png) only.";
    }

    this.imageArray[id].addEditProperty = "";
    this.imageArray[id].crossBtnValue = "";
    this.imageArray[id].imageDisplayValue = "";
    this.imageArray[id].buttonName = "";
    this.imageArray[id].iconOfButton = "edit";
    this.imageArray[id].imageLoaderProperty = "none";


    this.imageCounter += 1;
    if (this.imageCounter <= this.maxNoOfImage) {
      let image = new ImageProperty();
      this.imageArray.push(image);
    }
    if (this.imageCounter > 1) {
      this.atleastOneImage = true;
      this.allowSubmit = true;
    }

    // If the file enterd was invalid delete the extra image holder created
    if (err)
      this.removeImage(id);
  }

  removeImage(id) {
    //send the DELETE request and then remove from local
    this.imageService.deleteImage(this.productModel.images[id]).subscribe();

    if (this.imageCounter != 0 && this.imageArray[id].pictureContainerStyle == "4px solid blue") {
      this.selectHeroImg(0);
      this.imageArray[0].heroImage = "";
    }

    this.imageArray[id].iconOfButton = "plus";
    this.imageArray[id].imageDisplayValue = "none";
    this.imageArray[id].crossBtnValue = "none";
    this.imageArray[id].buttonName = "Add";
    this.imageArray[id].iconOfButton = "plus";
    this.imageArray[id].pictureContainerStyle = "1px solid lightgrey";
    this.productModel.images.splice(id, 1);

    if (this.imageCounter > this.minNoOfImage) {
      this.imageArray.splice(id, 1);
      this.imageCounter -= 1;
    }
    if (this.imageCounter == this.maxNoOfImage) {
      let image = new ImageProperty();
      this.imageArray.push(image);
    }

    if (this.imageCounter <= 1) {
      this.atleastOneImage = false;
      this.allowSubmit = false;
    }
  }

  selectHeroImg(id) {
    // for (let index = 0; index < this.imageArray.length; index++) {
    //   if (index != id) {
    //     this.imageArray[index].pictureContainerStyle = "1px solid lightgrey";
    //     this.imageArray[index].heroImage = "none";
    //   }
    // }
    this.imageArray[id].pictureContainerStyle = "4px solid blue";
    this.productModel.heroImage = this.productModel.images.pop();
  }

  imageClick(id) {
    document.getElementById(id).click();
  }

  adActionBtn() {
    this.productId ? this.updateProduct() : this.PostProduct();
  }

}