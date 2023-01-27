import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent {
  @ViewChild('productComponent', { static: true }) productComponent!: ProductComponent;

  first = 0;
  second = 0;

  handleChange(): void {
    this.productComponent.product = this.first * this.second;
  }
}
