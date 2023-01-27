import { Component, Input } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { onInputChanges } from '../util/on-input-changes';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() first!: number;
  readonly first$: Observable<number> = onInputChanges(this, 'first');
  @Input() second!: number;
  readonly second$: Observable<number> = onInputChanges(this, 'second');

  readonly product$ = combineLatest([this.first$, this.second$]).pipe(
    map(([first, second]) => first * second)
  );

  ngOnInit(): void {}

  ngOnChanges(): void {}
}
