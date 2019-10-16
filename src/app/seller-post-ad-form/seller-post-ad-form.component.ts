import { Component, OnInit} from '@angular/core';
import { ImageProperty } from './imageProperty';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'seller-post-ad-form',
  templateUrl: './seller-post-ad-form.component.html',
  styleUrls: ['./seller-post-ad-form.component.css']
})

export class SellerPostAdFormComponent implements OnInit {
  minNoOfImage=1;
  maxNoOfImage=5;

  heroImageUrl = ""; // store url of hero image
  imageArray:ImageProperty[] =[];
  
  categories = ["Home","Electronics","Car","Bike"]; // this is provided by categories api
  states = ["Andra Pradesh","Go","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka",
  "Kerala","Madya Pradesh","Maharashtra","Punjab","Rajasthan"]
  
  //properties of html element 
  addressDisplayValue = "none";
  purchaseDate = "none";
  imageCounter = 1;

  constructor(public datepipe: DatePipe){} //use for validation of date 

  ngOnInit() {
    let image =new ImageProperty();
    this.imageArray.push(image);
  } 

  date =  new Date();
  validateDate(id)
  {
    this.date=new Date();
    let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
    var userDate = id.target.value;
    if(userDate > latest_date){
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
    }
    else{
      this.addressDisplayValue="none"
    }
  }
  
  // loadImage()
  // {
  //   src = this.imageArray[id].imageURL;
  // }


  addImage(id,event){
    if(id==0)
    {
      this.selectHeroImg(id);
      this.imageArray[0].heroImage="";
    }

    console.log(event.target.value);  // calls upload image api it will return url of image after uploading image
    //this.imageArray[id].imageURL = funcUploadImage(event.target.value);
    this.imageArray[id].imageURL = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    //Mock image URL

    this.imageArray[id].CrossBtnValue="";
    this.imageArray[id].imageDisplayValue="";
    this.imageArray[id].buttonName ="Change";
    this.imageArray[id].iconOfButton = "edit";
    this.imageCounter += 1;
    if(this.imageCounter <= this.maxNoOfImage)
    {
      let image =new ImageProperty();
      this.imageArray.push(image);
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
    if(this.imageCounter==2)
    {
      this.selectHeroImg(0);
      this.imageArray[0].heroImage="";
    }
  }

  selectHeroImg(id)
  {
    for (let index = 0; index < this.imageArray.length; index++) 
    {
      if(index!=id)
      {
        this.imageArray[index].pictureContainerStyle = "";
        this.imageArray[index].heroImage="none";
      }      
    }
    this.imageArray[id].pictureContainerStyle = "4px solid red";
    this.imageArray[id].heroImage="";
    this.heroImageUrl=this.imageArray[id].imageURL;
  }

  imageClick(id){
    document.getElementById(id).click();
    return false;
  }

}