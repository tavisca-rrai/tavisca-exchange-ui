import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input() hideMobileMenu:boolean = true;
  toggleMenu():void{
    if(this.hideMobileMenu){
      this.hideMobileMenu = false;
    }else{
      this.hideMobileMenu = true;
    }
  }
  ngOnInit() {
  }

}
