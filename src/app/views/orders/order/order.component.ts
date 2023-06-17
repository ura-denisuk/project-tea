import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrderType} from "../../../../types/order";
import {ProductService} from "../../../shared/services/product.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy{

  public formValues: OrderType = {
    name: '',
    last_name: '',
    phone: '',
    country: '',
    zip: '',
    product: '',
    address: '',
    comment: ''
  }

  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;
  public failText = false;


  //Валидация формы
  checkoutForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я]+$')]],
    last_name: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я]+$')]],
    phone: ['', [Validators.required, Validators.pattern('^\\+?\\d{11}$')]],
    country: ['', Validators.required],
    zip: ['', Validators.required],
    product: [{value: this.formValues.product, disabled: true}, Validators.required],
    address: ['', [Validators.required, Validators.pattern('[a-zA-Zа-яА-Я0-9\\s\\/\\-]+')]],
    comment: ['']
  })

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscriptionOrder?.unsubscribe();
  }


  ngOnInit() {
    this.subscription = this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (params['product']) {
        this.checkoutForm.get('product')?.setValue(params['product']);
        console.log(params['product']);
      }
    })
  }

  public createOrder() {

    this.subscriptionOrder = this.productService.createOrder(this.checkoutForm.getRawValue())
      .subscribe(response => {
        if ((response.success === 1) && !response.message) {
          this.router.navigate(['success-order']);
        } else {
          this.failText = true;
        }
      })
  }
}
