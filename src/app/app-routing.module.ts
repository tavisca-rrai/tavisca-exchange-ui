import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertismentsListComponent } from 'app/home-module/advertisments-list/advertisments-list.component';

const routes: Routes = [
  { path: 'advertisments-list', component: AdvertismentsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
