import { Component} from '@angular/core';

@Component({
  selector: 'seller-post-ad-form',
  templateUrl: './seller-post-ad-form.component.html',
  styleUrls: ['./seller-post-ad-form.component.css']
})

export class SellerPostAdFormComponent  {  

  imageUrl = ["","","","",""];
  imageValue = ["none","none","none","none","none"];
  CrossBtnValue = ["none","none","none","none","none"];
  buttonName = ["Add","Add","Add","Add","Add"];
  iconOfButton = ["plus" ,"plus","plus","plus","plus"]; 
  pictureContainerStyle =["","","","","",""];

  addImage(id,event){
    console.log(id+"  "+event.target.value);
    this.imageUrl[id] = event.target.value;
    this.CrossBtnValue[id] ="";
    this.imageValue[id] ="";
    this.buttonName[id] ="Change";
    this.iconOfButton[id] ="edit";
  }

  removeImage(id)
  {
    this.iconOfButton[id] = "plus";
    this.imageValue[id] = "none";
    this.CrossBtnValue[id] = "none";
    this.buttonName[id] = "Add";
    this.iconOfButton[id] = "plus";
    this.pictureContainerStyle[id]="";
  }

  selectHeroImg(id)
  {
    for (let index = 0; index < 5; index++) {
      if(index!=id)
      {
        this.pictureContainerStyle[index]="";
      }      
    }
    this.pictureContainerStyle[id]="2px solid red";
  }

}
