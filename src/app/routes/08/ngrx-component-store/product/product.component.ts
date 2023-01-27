import { Component, inject, Input } from '@angular/core';
import { ProductStore } from '../stores/product.store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  first$ = inject(ProductStore).first$;
  second$ = inject(ProductStore).second$;
  product$ = inject(ProductStore).product$;
}
