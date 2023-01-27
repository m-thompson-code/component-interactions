import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges {
  @Input() first!: number;
  @Input() second!: number;
  product = this.getProduct();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['first'] || changes['second']) {
      this.product = this.getProduct();
    }
  }

  getProduct(): number {
    return this.first * this.second ?? 0;
  }
}
