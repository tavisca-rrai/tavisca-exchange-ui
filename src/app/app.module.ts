import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostAdComponentComponent } from './post-ad-component/post-ad-component.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule} from 'ng2-validation';
import { DatePipe } from '@angular/common';

import { SharedTestComponentComponent } from './shared-component/shared-test-component/shared-test-component.component';
import { AdvertismentsListComponent } from './home-module/advertisments-list/advertisments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostAdComponentComponent,
    
    SharedTestComponentComponent,
    AdvertismentsListComponent
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
