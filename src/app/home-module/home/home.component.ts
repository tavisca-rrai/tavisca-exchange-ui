import { Component, OnInit, DoCheck } from '@angular/core';
import {  trigger,  state,  style,  animate,  transition } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width:'0px'
      })),
      state('closed', style({
        width:'200px'
      })),
      state('contentOpen', style({
        marginLeft:'0px'
      })),
      state('contentClosed', style({
        marginLeft:'200px'
      })),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      transition('contentOpen <=> contentClosed', [
        animate('0.5s')
      ])
    ]),
  ],
})
export class HomeComponent implements OnInit , DoCheck{
  hideMenu:boolean;
  constructor(private router: Router) { }
  
  ngDoCheck(): void {
   if(this.router.url!="/products"){
     this.hideMenu = true;
   }
  }
  ngOnInit() {
  }
  toggleMenuEvent(hideMenu:boolean){
    this.hideMenu = hideMenu;
  }
}
