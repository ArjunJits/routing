import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayproductsComponent } from './displayproducts/displayproducts.component'; 
import { ProductDetailsComponent } from './product-details/product-details.component'; 


const routes: Routes = [
  {path:" ",component:DisplayproductsComponent},
  {path:"dp",component:DisplayproductsComponent},
  {path:"dp/pd/:pid",component:ProductDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
