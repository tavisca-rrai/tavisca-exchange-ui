import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SellerPostAdFormComponent } from './seller-post-ad-form/seller-post-ad-form.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule} from 'ng2-validation'

@NgModule({
  declarations: [
    AppComponent,
    SellerPostAdFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
