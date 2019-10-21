import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';
import { PostAdComponentComponent } from './post-ad-component/post-ad-component.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'post', component: PostAdComponentComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) ,
    FormsModule     
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
