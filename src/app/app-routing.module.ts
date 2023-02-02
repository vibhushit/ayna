import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'main',component:MainComponent},
  {path:'home', component:HomeComponent},
  {path:'products', component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
