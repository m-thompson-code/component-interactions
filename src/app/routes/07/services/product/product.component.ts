import { Component, inject, Input } from '@angular/core';
import { ProductStateService } from '../product-state/product-state.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() first!: number;
  @Input() second!: number;
  readonly product$ = inject(ProductStateService).product$;
}
