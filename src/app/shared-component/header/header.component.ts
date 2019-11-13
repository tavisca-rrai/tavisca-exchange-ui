import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,DoCheck{
  ngDoCheck(): void {
    if(this.router.url!="/products"){
      this.showToggleButton = false;
    }
    else{
      this.showToggleButton = true;
    }
  }
  @Input() showToggleButton:boolean = false;

  userId: string;
  constructor(
    private userService: UserService,private router: Router
  ) {
    this.userId = this.userService.userId;
  }

  @Input() hideMobileMenu: boolean = true;
  @Input() hideMenu: boolean = true;
  @Output() toggleMenuEvent = new EventEmitter<boolean>();
  toggleMobileMenu(): void {
    if (this.hideMobileMenu) {
      this.hideMobileMenu = false;
    } else {
      this.hideMobileMenu = true;
    }
  }
  toggleMenu(): void {
    if (this.hideMenu) {
      this.hideMenu = false;
    }
    else {
      this.hideMenu = true;
    }
    this.toggleMenuEvent.emit(this.hideMenu);
  }
  ngOnInit() {
    this.toggleMenuEvent.emit(this.hideMenu);
  }

}
