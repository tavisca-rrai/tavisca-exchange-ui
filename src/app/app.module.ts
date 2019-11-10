import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { LoginModule } from "./login-module/login.module"; 
import { AppComponent } from './app.component';
import { PostAdComponentComponent } from './post-ad-component/post-ad-component.component';
import { CustomFormsModule} from 'ng2-validation';
import { DatePipe } from '@angular/common';

import { SharedTestComponentComponent } from './shared-component/shared-test-component/shared-test-component.component';
import { ProductsListComponent } from './home-module/products-list/products-list.component';
import { HeaderComponent } from './shared-component/header/header.component';
import { FooterComponent } from './shared-component/footer/footer.component';
import { LeftNavBarComponent } from './shared-component/left-nav-bar/left-nav-bar.component';
import { MobileLeftNavBarComponent } from './shared-component/mobile-left-nav-bar/mobile-left-nav-bar.component';
import { HomeComponent } from './home-module/home/home.component';
import { AdvertismentDetailsComponent } from './home-module/advertisment-details/advertisment-details.component';
import {UploadImageService} from './services/upload-image.service'
@NgModule({
  declarations: [
    AppComponent,
    PostAdComponentComponent,
    SharedTestComponentComponent,
    ProductsListComponent,
    HeaderComponent,
    FooterComponent,
    LeftNavBarComponent,
    MobileLeftNavBarComponent,
    HomeComponent,
    AdvertismentDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LoginModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [DatePipe,UploadImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }




