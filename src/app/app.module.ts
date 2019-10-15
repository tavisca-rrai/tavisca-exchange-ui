import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SellerPostAdFormComponent } from './seller-post-ad-form/seller-post-ad-form.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule} from 'ng2-validation';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    SellerPostAdFormComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
