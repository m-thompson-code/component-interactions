import { Component, Input } from '@angular/core';
import { combineLatest, map, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  readonly first$ = new ReplaySubject<number>(0);
  @Input() set first(value: number) {
    this.first$.next(value);
  }
  get first(): number {
    throw new Error('PLZ DONT ACCESS ME EVER TY :3');
  }

  readonly second$ = new ReplaySubject<number>(0);
  @Input() set second(value: number) {
    this.second$.next(value);
  }
  // get second(): number {
  //   throw new Error('PLZ DONT ACCESS ME EVER TY :3');
  // }

  readonly product$ = combineLatest([this.first$, this.second$]).pipe(
    map(([first, second]) => first * second)
  );
}
