import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-left-nav-bar',
  templateUrl: './mobile-left-nav-bar.component.html',
  styleUrls: ['./mobile-left-nav-bar.component.css']
})
export class MobileLeftNavBarComponent implements OnChanges {

  constructor() { }
  categories = ["Electronics","Clothing","Books","Sports"];
  @Input() hideMobileMenu:boolean; 
  width:string;
  ngOnChanges() {
    if(this.hideMobileMenu){
      this.width = "0px";
    }else{
      this.width = "200px";
    }
  }

}
