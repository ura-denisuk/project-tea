import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import {OrderComponent} from "./order/order.component";
import {SuccessOrderComponent} from "./success-order/success-order.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    OrderComponent,
    SuccessOrderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    OrdersRoutingModule
  ],
  exports: [
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
