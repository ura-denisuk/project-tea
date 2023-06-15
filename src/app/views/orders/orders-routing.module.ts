import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderComponent} from "./order/order.component";
import {SuccessOrderComponent} from "./success-order/success-order.component";

const routes: Routes = [
  {path:'order', component: OrderComponent},
  {path:'success-order', component: SuccessOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
