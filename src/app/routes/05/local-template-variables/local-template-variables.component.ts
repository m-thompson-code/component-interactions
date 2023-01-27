import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-local-template-variables',
  templateUrl: './local-template-variables.component.html',
  styleUrls: ['./local-template-variables.component.scss']
})
export class LocalTemplateVariablesComponent {
  first = 0;
  second = 0;

  handleChange(productComponent: ProductComponent): void {
    productComponent.product = this.first * this.second;
  }
}
