import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {CatalogComponent} from "./catalog/catalog.component";

const routes: Routes = [
  {path:'catalog', component: CatalogComponent},
  {path:'product/:id', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
