<<<<<<< HEAD
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
=======
import { LoginModule } from "./login-module/login.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
>>>>>>> 673ad79a205abd237dd6135a163ea6dadd872989

import { AppComponent } from "./app.component";
import { SharedTestComponentComponent } from "./shared-component/shared-test-component/shared-test-component.component";
import { AdvertismentsListComponent } from "./home-module/advertisments-list/advertisments-list.component";
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
import { HttpClientModule } from "@angular/common/http";
import { TestComponentComponent } from "./test-module/test-component/test-component.component";
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";
>>>>>>> 673ad79a205abd237dd6135a163ea6dadd872989

@NgModule({
  declarations: [
    AppComponent,
    SharedTestComponentComponent,
<<<<<<< HEAD
    AdvertismentsListComponent,
    LoginComponent
=======
    TestComponentComponent,
    AdvertismentsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    LoginModule,
    AppRoutingModule,
    RouterModule
>>>>>>> 673ad79a205abd237dd6135a163ea6dadd872989
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
