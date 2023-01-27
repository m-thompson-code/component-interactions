import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  private _first!: number;
  @Input() set first(value: number) {
    this._first = value;
    this.product = this.getProduct();
  }
  get first(): number {
    return this._first;
  }

  private _second!: number;
  @Input() set second(value: number) {
    this._second = value;
    this.product = this.getProduct();
  }
  get second(): number {
    return this._second;
  }

  product!: number;// = this.getProduct();

  getProduct(): number {
    return this.first * this.second ?? 0;
  }
}
