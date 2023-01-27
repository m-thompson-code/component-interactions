import { Component, inject } from '@angular/core';
import { ProductStore } from './stores/product.store';

@Component({
  providers: [ProductStore],
  selector: 'app-ngrx-component-store',
  templateUrl: './ngrx-component-store.component.html',
  styleUrls: ['./ngrx-component-store.component.scss']
})
export class NgrxComponentStoreComponent {
  readonly productStore = inject(ProductStore);

  first$ = this.productStore.first$;
  second$ = this.productStore.second$;

  handleFirstChange(event: Event): void {
    this.productStore.setProduct({ first: +(event.target as HTMLInputElement).value });
  }

  handleSecondChange(event: Event): void {
    this.productStore.setProduct({ second: +(event.target as HTMLInputElement).value });
  }
}
