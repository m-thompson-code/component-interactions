import { Component } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { ParentData } from '../dependency-inject.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  first$: Observable<number>;
  second$: Observable<number>;
  product$: Observable<number>;

  constructor(private readonly dataService: DataService<ParentData>) {
    const { first$, second$ } = this.dataService.get();
    this.first$ = first$;
    this.second$ = second$;

    this.product$ = combineLatest([this.first$, this.second$]).pipe(
      map(([first, second]) => first * second)
    );
  }
}
