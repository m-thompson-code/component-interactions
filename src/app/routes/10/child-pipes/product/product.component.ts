import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() first!: number;
  @Input() second!: number;

  getProduct(first: number, second: number): number {
    return first * second;
  }
}
