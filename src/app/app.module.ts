import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng5SliderModule } from 'ng5-slider';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { LoginModule } from "./login-module/login.module";
import { AppComponent } from './app.component';
import { PostAdComponentComponent } from './post-ad-component/post-ad-component.component';
import { CustomFormsModule } from 'ng2-validation';
import { DatePipe } from '@angular/common';
import { SharedTestComponentComponent } from './shared-component/shared-test-component/shared-test-component.component';
import { ProductsListComponent } from './home-module/products-list/products-list.component';
import { HeaderComponent } from './shared-component/header/header.component';
import { FooterComponent } from './shared-component/footer/footer.component';
import { LeftNavBarComponent } from './shared-component/left-nav-bar/left-nav-bar.component';
import { MobileLeftNavBarComponent } from './shared-component/mobile-left-nav-bar/mobile-left-nav-bar.component';
import { HomeComponent } from './home-module/home/home.component';
import { AdvertismentDetailsComponent } from './home-module/advertisment-details/advertisment-details.component';
import { UserProfileComponent } from './user-module/user-profile/user-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CookieService } from 'ngx-cookie-service';
import { ImageService } from './services/ad-image.service'
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
    AdvertismentDetailsComponent,
    UserProfileComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Ng5SliderModule,
    FormsModule,
    CustomFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LoginModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [DatePipe, ImageService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
