import { UserProfile } from './../../models/user/user-profile';
import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { Category } from 'src/app/models/category';

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
  categories:Category[];

  constructor(
    private router: Router,
    private userService: UserService,
    private productService: ProductService,
    private categoryService:CategoryService
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

    this.categoryService.getCategories().subscribe(
      (response) => {
        this.categories = response.categories;
      },
      err => {
        console.log(err.error);
      }
    );
  }
  Search() {
    this.productService.setSearchQuery(this.searchQuery);
    this.searchQuery="";
  }

  AutoPopulate(event:any)
  {  let count = 5;
    this.suggestions = [];
    if(event.target.value.length>0)
    {
      for(let i=0; i<this.categories.length;i++)
      {
        for(let j=0;j<this.categories[i].tags.length;j++)
         {
            if(((this.categories[i].tags[j].toLowerCase()).indexOf(event.target.value.toLowerCase()))>-1)
            {
              if(count>0){
                this.suggestions.push(this.categories[i].tags[j]);
                count--;
              }else{
                break;
              }
              
            }
         }
      }
    }
    console.log("hi");
  }
}
