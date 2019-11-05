import { Component, OnInit } from '@angular/core';
import { ImageProperty } from '../models/imageProperty';
import { DatePipe } from '@angular/common';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse, } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../environments/environment'
@Component({
  selector: 'app-post-ad-component',
  templateUrl: './post-ad-component.component.html',
  styleUrls: ['./post-ad-component.component.css']
})

export class PostAdComponentComponent implements OnInit {
  IsMOCK= environment.isMockingEnabled;
  minNoOfImage=1;
  maxNoOfImage=5;
  isAddressSelected:boolean=false;
  imageArray:ImageProperty[] =[];
  serverUrl="https://localhost:44357/"; //the root url of the server
  // uploadedPercent=0;

  categories = ["Home","Electronics","Car","Bike"]; // this is provided by categories api
  states = ["Andra Pradesh","Go","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka",
  "Kerala","Madya Pradesh","Maharashtra","Punjab","Rajasthan"]
  
  //properties of html element 
  addressDisplayValue = "none";
  purchaseDate = "none";
  imageCounter = 1;
  constructor(public datepipe: DatePipe,private productService:ProductService, public http:HttpClient,public sanatizer : DomSanitizer){} //use for validation of date 
  productModel : Product;
  
  ngOnInit() {
    let image =new ImageProperty();
    this.imageArray.push(image);
    this.productModel=new Product();
  } 

  submitted = false;
  onSubmit() { 
    this.submitted = true;
    // console.log(this.productModel);
    // console.log(this.productModel.imageUrl);
  }


  PostProduct()
  {
    this.productService.AddProduct(this.productModel).subscribe(
      response => {
        console.log(response);
        
        if(response.id!=null && response.id.trim()!=""){
        alert("Product Added Successfully!!");
        }
        else
        {
          alert("Something went wrong");
        }
      },
      err => {
        alert("Oops, something went wrong, Please try again later.");
        console.log(err.error);
      }
    );
  }

  date =  new Date();
  latest_date = this.datepipe.transform(this.date, 'yyyy-MM-dd');
  validateDate(id)
  {
    var userDate = id.target.value;
    if(userDate > this.latest_date){
      this.purchaseDate="block";
    }else{
      this.purchaseDate="none";
    }
  }

  validateAddress(event)
  {
    if(event.target.checked)
    {
      this.addressDisplayValue="block";
      this.isAddressSelected=true;
    }
    else{
      this.addressDisplayValue="none"
      this.isAddressSelected=false;
    }
  }

  imageLoader(id)
  {
    this.imageArray[id].crossBtnValue="none";
    this.imageArray[id].imageDisplayValue="none";
    this.imageArray[id].addEditProperty="none";
    this.imageArray[id].pictureContainerStyle = "1px solid lightgrey";
    this.imageArray[id].heroImage = "none";
    this.imageArray[id].imageLoaderProperty="";
  }

  isValidImage(file):boolean{
    var validFormats = ['jpg','jpeg','png'];
    let  fName = file.name;
    var ext = fName.substr(fName.lastIndexOf('.')+1);
    if(ext=='') 
      return false;
    if(validFormats.indexOf(ext) == -1){
        return false;
    }
    return true;
  }

  addImage(id,event){
    this.imageLoader(id);
    this.imageArray[id].addEditProperty="";
    this.imageArray[id].crossBtnValue="";
    this.imageArray[id].imageDisplayValue="";
    this.imageArray[id].buttonName ="Change";
    this.imageArray[id].iconOfButton = "edit";
    this.imageArray[id].imageLoaderProperty="none";
    var err =false;
    if(this.IsMOCK)
    {
      this.imageArray[id].imageURL = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
      this.productModel.imageUrl.push("https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
    }
    else if(this.isValidImage(event.target.files[0]))
    {    
      let imageUrl = "";
      let safeUrl;
      //the  image upload part
      let input = new FormData();
      input.append("file", event.target.files[0]);

      const req = new HttpRequest('POST', this.serverUrl+'api/v1.0/OnlineRetailPortal/images', input, {
        reportProgress: true,
      });
      this.http.request<ImgResponse>(req).subscribe(event => {
        // Via this API, you get access to the raw event stream.
        // Look for upload progress events.
        if (event.type === HttpEventType.UploadProgress) 
        {
          // This is an upload progress event. Compute and show the % done:
          const percentDone = Math.round(100 * event.loaded / event.total);
          this.imageArray[id].ProgressBarDispProp="";
  
          console.log(`File is ${percentDone}% uploaded.`);
          this.imageArray[id].uploadedPercent=percentDone;
        } 
        else if (event instanceof HttpResponse)
        {
          // if(event.body.Code===200)
          // {
            console.log('File is completely uploaded!');
            this.imageArray[id].ProgressBarDispProp="none";
            imageUrl = this.serverUrl+event.body.message;
            console.log(imageUrl);
            safeUrl = this.sanatizer.bypassSecurityTrustUrl(imageUrl);  // to bypass sanatization of local url
  
            this.imageArray[id].imageURL = safeUrl;
            this.productModel.imageUrl.push(event.body.message.split("/")[1]); //storing only the name of the file not the url as it may change on the server side
            this.imageArray[id].ProgressBarDispProp="none";
          //}
          // else
          // {
          //   console.log("Upload Failed\n Error: "+ event.body.Message);
          //   this.removeImage(id);
          // }
          
        }
      },
      
      error=>{
        this.removeImage(id);
        console.log("Upload Failed\n Error: "+ error.message);
        alert("Error: Wrong format of file. \n Please Upload Images Only. ");
      }
      );
     
    }
    else
    {
      alert("Error: Wrong format of file.\nPlease Upload Images(jpg, jpeg, png) Only. ");
      err = true;
    }

       
      if(id==0)
      {
        this.selectHeroImg(id);
        this.imageArray[0].heroImage="";
      }
  
      this.imageCounter += 1;
      if(this.imageCounter <= this.maxNoOfImage)
      {
        let image =new ImageProperty();
        this.imageArray.push(image);
      }
    if(err)
      this.removeImage(id);

  }
 
  removeImage(id)
  {
    //send the DELETE request and then remove from local
    let url = this.serverUrl+'api/v1.0/OnlineRetailPortal/images/'+this.productModel.imageUrl[id];
    this.http.delete(url).subscribe();
    console.log(url);


    if(this.imageCounter!=0 && this.imageArray[id].pictureContainerStyle =="4px solid blue")
    {
      this.selectHeroImg(0);
      this.imageArray[0].heroImage="";
    }

    this.imageArray[id].iconOfButton = "plus";
    this.imageArray[id].imageDisplayValue = "none";
    this.imageArray[id].crossBtnValue = "none";
    this.imageArray[id].buttonName = "Add";
    this.imageArray[id].iconOfButton = "plus";
    this.imageArray[id].pictureContainerStyle = "1px solid lightgrey";
    this.productModel.imageUrl.splice(id,1);

    if(this.imageCounter>this.minNoOfImage)
    {
      this.imageArray.splice(id,1);
      this.imageCounter -= 1;
    }
    if(this.imageCounter==this.maxNoOfImage)
    {
      let image =new ImageProperty();
      this.imageArray.push(image);
    }
  }

  selectHeroImg(id)
  {
    for (let index = 0; index < this.imageArray.length; index++) 
    {
      if(index!=id)
      {
        this.imageArray[index].pictureContainerStyle = "1px solid lightgrey";
        this.imageArray[index].heroImage="none";
      }      
    }
    this.imageArray[id].pictureContainerStyle = "4px solid blue";
    this.productModel.heroImageUrl=this.productModel.imageUrl[id];
  }

  imageClick(id){
    document.getElementById(id).click();
  }


}
interface ImgResponse {
  message:string;
}