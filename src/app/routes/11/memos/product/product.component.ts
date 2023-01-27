import { Component, Input } from '@angular/core';
import { memo } from '../util/memo';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() first!: number;
  @Input() second!: number;

  productMemo = memo((first: number, second: number) => {
    return first * second;
  });
}
