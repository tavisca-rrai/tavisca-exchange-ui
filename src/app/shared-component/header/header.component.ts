import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userId: string;
  constructor(
    private userService: UserService
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
