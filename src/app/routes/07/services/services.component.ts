import { Component, inject } from '@angular/core';
import { ProductStateService } from './product-state/product-state.service';

@Component({
  providers: [ProductStateService],
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  readonly productStateService = inject(ProductStateService);
  
  first = 0;
  second = 0;

  handleChange(): void {
    this.productStateService.setProduct(this.first, this.second);
  }
}
