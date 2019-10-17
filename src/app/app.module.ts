import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { SharedTestComponentComponent } from "./shared-component/shared-test-component/shared-test-component.component";
import { AdvertismentsListComponent } from "./home-module/advertisments-list/advertisments-list.component";
import { LoginComponent } from "./login/login.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SharedTestComponentComponent,
    AdvertismentsListComponent,
    LoginComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
