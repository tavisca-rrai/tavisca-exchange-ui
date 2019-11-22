import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PostAdComponentComponent } from './post-ad-component/post-ad-component.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from "./login-module/login-component/login.component";
import { HomeComponent } from './home-module/home/home.component';
import { ProductsListComponent } from 'src/app/home-module/products-list/products-list.component';
import { AdvertismentDetailsComponent } from './home-module/advertisment-details/advertisment-details.component';
import { UserProfileComponent } from './user-module/user-profile/user-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "products",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: ProductsListComponent
      },
      {
        path: "details/:id",
        component: AdvertismentDetailsComponent
      },
      {
        path: "postad",
        component: PostAdComponentComponent
      },
      {
        path: "update-ad/:id",
        component: PostAdComponentComponent
      }
    ]
  },
  {
    path: "profile/:id",
    component: UserProfileComponent,
    children: [
      {
        path: "active",
        component: ProductsListComponent
      },
      {
        path: "inactive",
        component: ProductsListComponent
      },
      {
        path: "active/details/:id",
        component: AdvertismentDetailsComponent
      },
      {
        path: "inactive/details/:id",
        component: AdvertismentDetailsComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
