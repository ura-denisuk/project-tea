import {Component, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ProductType} from "../../../../types/product";

@Component({
  selector: 'catalog-component',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnDestroy{

  products: ProductType[] = [];
  private subscriptionProducts: Subscription | null = null;

  constructor(private http: HttpClient,
              private router: Router) {


  }

  ngOnDestroy() {
    this.subscriptionProducts?.unsubscribe();
  }

  ngOnInit() {
    this.subscriptionProducts = this.http.get<ProductType[]>('https://testologia.site/tea')
      .subscribe(
        {
          next: (data) => {
            this.products = data;
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
        });
  }
}
