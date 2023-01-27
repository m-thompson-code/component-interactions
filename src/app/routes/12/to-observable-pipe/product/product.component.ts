import { Component, Input } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() first$!: Observable<number>;
  @Input() second$!: Observable<number>;
  product$!: Observable<number>;
  
  ngOnInit(): void {
    this.product$ = combineLatest([this.first$, this.second$]).pipe(
      map(([first, second]) => first * second)
    );
  }
}
