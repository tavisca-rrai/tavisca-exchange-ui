import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SellerPostAdFormComponent } from './seller-post-ad-form/seller-post-ad-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerPostAdFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
