import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() first!: number;
  @Input() second!: number;
  product!: number;

  ngOnInit(): void {
    this.product = this.first * this.second;
  }
}
