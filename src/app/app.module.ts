import { LoginModule } from "./login-module/login.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { SharedTestComponentComponent } from './shared-component/shared-test-component/shared-test-component.component';
import { AdvertismentsListComponent } from './home-module/advertisments-list/advertisments-list.component';
import { HeaderComponent } from './shared-component/header/header.component';
import { FooterComponent } from './shared-component/footer/footer.component';
import { LeftNavBarComponent } from './shared-component/left-nav-bar/left-nav-bar.component';
import { MobileLeftNavBarComponent } from './shared-component/mobile-left-nav-bar/mobile-left-nav-bar.component';
import { HomeComponent } from './home-module/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SharedTestComponentComponent,
    AdvertismentsListComponent,
    HeaderComponent,
    FooterComponent,
    LeftNavBarComponent,
    MobileLeftNavBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
