import { Component, OnInit, Input ,DoCheck} from '@angular/core';

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.css']
})
export class LeftNavBarComponent implements OnInit,DoCheck {

  constructor() { }
  content = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42];
  categories = ["Electronics","Clothing","Books","Sports"];
  @Input() hideMenu:boolean;
  rightContentElement:any;
  leftBarElement:any;
  ngOnInit() {
  }
  ngDoCheck(){
    this.toggleMenu();
  }
  toggleMenu(){
    this.rightContentElement = document.querySelector(".flex-container div.content");
    this.leftBarElement = document.querySelector(".flex-container div.left-side-bar");
    
    this.rightContentElement.style.transition = "0.5s";
    this.leftBarElement.style.transition = "0.5s";
    
    if(this.hideMenu){
      this.leftBarElement.style.left = "-20%";
      this.rightContentElement.style.marginLeft = "0%";
    }
    else{
      this.leftBarElement.style.left = "0";
      this.rightContentElement.style.marginLeft = "20%";
    }
  }
}
