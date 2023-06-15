import {Component, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'success-order',
  templateUrl: './success-order.component.html',
  styleUrls: ['./success-order.component.scss']
})
export class SuccessOrderComponent implements OnDestroy {

  private subscription: Subscription | null = null;

  private orderObservable: Observable<string>;

  constructor(private router: Router) {
    this.orderObservable = new Observable((observer) => {
      setTimeout(() => {
        observer.next('start')
      }, 2000)
    })
  }

  ngOnInit() {

    this.subscription = this.orderObservable.subscribe((param: string) => {
      if (param) {
        this.router.navigate(['/catalog']);
      }
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
