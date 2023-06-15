import {Component, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnDestroy{

  private subscription: Subscription | null = null;

  whitePopup: HTMLElement | null = null;

  private popupObservable: Observable<string>;

  constructor() {
    this.popupObservable = new Observable((observer) => {
    setTimeout(() => {
      observer.next('start')
    }, 3000)
  })
  }

  ngOnInit() {
    this.whitePopup = document.getElementById('white-popup');

    this.subscription = this.popupObservable.subscribe((param: string) => {
      if (param) {
        this.whitePopup!.style.display = 'block';
      }
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
