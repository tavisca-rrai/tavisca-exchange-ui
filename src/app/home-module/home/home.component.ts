import { Component, OnInit, DoCheck, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '0px'
      })),
      state('closed', style({
        width: '300px'
      })),
      state('contentOpen', style({
        marginLeft: '0px'
      })),
      state('contentClosed', style({
        marginLeft: '300px'
      })),
      transition('open <=> closed', [
        animate('0.3s')
      ]),
      transition('contentOpen <=> contentClosed', [
        animate('0.3s')
      ])
    ]),
  ],
})
export class HomeComponent implements OnInit, DoCheck {
  hideMenu: boolean;
  display : string = "block";
  isMobile: boolean = false;
  userId: string;
  disableAnimation: boolean = false;
  constructor(
    private router: Router
  ) { }

  ngDoCheck(): void {
    if (this.router.url != "/products") {
      this.hideMenu = true;
      this.disableAnimation = true;
      this.display= "none";
    } else {
      this.disableAnimation = false;
      this.display= "block";
    }
  }

  ngOnInit() {
    if (window.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  @HostListener('window:resize', ['$event.target'])
  onScreenSize(event) {
    if (event.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  toggleMenuEvent(hideMenu: boolean) {
    this.hideMenu = hideMenu;
  }
}
