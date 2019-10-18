import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedTestComponentComponent } from './shared-component/shared-test-component/shared-test-component.component';
import { AdvertismentsListComponent } from './home-module/advertisments-list/advertisments-list.component';
import { AdvertismentDetailsComponent } from './home-module/advertisment-details/advertisment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedTestComponentComponent,
    AdvertismentsListComponent,
    AdvertismentDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
