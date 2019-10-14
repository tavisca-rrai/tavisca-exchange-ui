import { Component, OnInit} from '@angular/core';
import { ImageProperty } from './imageProperty';


@Component({
  selector: 'seller-post-ad-form',
  templateUrl: './seller-post-ad-form.component.html',
  styleUrls: ['./seller-post-ad-form.component.css']
})

export class SellerPostAdFormComponent implements OnInit {
 
  imageArray:ImageProperty[] =[];
  categories = ["Home","Electronics","Car","Bike"];
  imageCounter = 1;
  addressDisplayValue = "none";

  states = [
  "Andra Pradesh",
  "Go",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madya Pradesh",
  "Maharashtra",
  "Punjab",
  "Rajasthan"
  ]
 ngOnInit(): void {
   let image =new ImageProperty();
   this.imageArray.push(image);
  } 

  addressDisplay(event)
  {
    if(event.target.checked)
    {
      this.addressDisplayValue="block";
    }
    else{
      this.addressDisplayValue="none"
    }
  }
  
  addImage(id){
    console.log(id+" hdjs");
    this.imageArray[id].CrossBtnValue="";
    this.imageArray[id].imageDisplayValue="";
    this.imageArray[id].buttonName ="Change";
    this.imageArray[id].iconOfButton = "edit";
    this.imageCounter += 1;
    if(this.imageCounter <= 5)
    {
    let image =new ImageProperty();
    this.imageArray.push(image);
    }
  }

   public message: string;
   public imagePath;
   imgURL: any;

   preview(files,id) {
    console.log(id+" asdf");
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    this.imageArray[id].imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
    this.imageArray[id].imgURL = reader.result;
    }
  }

  removeImage(id)
  {
    this.imageArray[id].iconOfButton = "plus";
    this.imageArray[id].imageDisplayValue = "none";
    this.imageArray[id].CrossBtnValue = "none";
    this.imageArray[id].buttonName = "Add";
    this.imageArray[id].iconOfButton = "plus";
    this.imageArray[id].pictureContainerStyle = "";
    if(this.imageCounter>1)
    {
    this.imageArray.splice(id,1);
    this.imageCounter -= 1;
    }
  }

  selectHeroImg(id)
  {
    for (let index = 0; index < this.imageArray.length; index++) 
    {
      if(index!=id)
      {
        this.imageArray[index].pictureContainerStyle = "";
      }      
    }
    this.imageArray[id].pictureContainerStyle = "3px solid red";
  }


  imageClick(id){
    document.getElementById(id).click();
    return false;
  }

}
