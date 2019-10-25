import { LoginComponent } from "./login-module/login-component/login.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ProductsListComponent } from 'src/app/home-module/products-list/products-list.component';

import { FormsModule } from "@angular/forms";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: 'products', component: ProductsListComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
