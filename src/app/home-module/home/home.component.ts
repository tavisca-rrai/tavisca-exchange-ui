import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  hideMenu: boolean;
  userId: string;

  constructor() { }

  ngOnInit() {
  }

  toggleMenuEvent(hideMenu: boolean) {
    this.hideMenu = hideMenu;
  }
}
