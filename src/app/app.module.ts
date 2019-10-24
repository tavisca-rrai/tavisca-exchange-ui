
import { LoginModule } from "./login-module/login.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { SharedTestComponentComponent } from "./shared-component/shared-test-component/shared-test-component.component";
import { AdvertismentsListComponent } from "./home-module/advertisments-list/advertisments-list.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    SharedTestComponentComponent,
    AdvertismentsListComponent
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
