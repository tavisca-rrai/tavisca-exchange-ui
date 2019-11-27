import { UserProfile } from './../../models/user/user-profile';
import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, DoCheck {
  userInfo: UserProfile = new UserProfile();
  searchQuery: string = "";
  userId: string;
  
  suggestions = [];
  categories = ["Property", "Car", "cam", "Mobile", "Bike", "Book", "Fashion", "Electronic", "Other"];


  constructor(
    private router: Router,
    private userService: UserService,
    private productService: ProductService
  ) {
    this.userId = this.userService.getUserFromStorage().id;
  }

  ngDoCheck(): void {
    if (this.router.url != "/products") {
      this.showToggleButton = false;
    }
    else {
      this.showToggleButton = true;
    }
  }

  @Input() hideMenu: boolean = true;
  @Input() showToggleButton: boolean = false;
  @Output() toggleMenuEvent = new EventEmitter<boolean>();

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
    this.userInfo.id = this.userService.getUserFromStorage().id;
    this.toggleMenuEvent.emit(this.hideMenu);
    this.userService.getUserProfile(this.userInfo.id).subscribe(
      (data) => {
        this.userInfo = data.userProfile;
      },
      err => {
      }
    );
  }

  Search() {
    alert("hi");
    this.productService.setSearchQuery(this.searchQuery);
  }

  AutoPopulate(event:any)
  {  
    this.suggestions = [];
    console.clear();
    if(event.target.value.length>0)
    {
      for(var i=0; i<this.categories.length;i++)
      {
        if(((this.categories[i].toLowerCase()).indexOf(event.target.value.toLowerCase()))>-1)
        {
          this.suggestions.push(this.categories[i]);
        }
      }
    }
  }
}
