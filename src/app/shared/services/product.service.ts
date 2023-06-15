import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../../../types/product";
import {OrderType} from "../../../types/order";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.site/tea?id=${id}`);
  }

  createOrder(data: OrderType ) {
    return this.http.post<{ success: number, message?: string }>(`https://testologia.site/order-tea`, data);
  }
}
