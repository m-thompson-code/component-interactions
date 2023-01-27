import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface ProductState {
  first: number;
  second: number;
}

@Injectable()
export class ProductStore extends ComponentStore<ProductState> {
  constructor() {
    // set defaults
    super({
      first: 0,
      second: 0
    });
  }

  readonly setProduct = this.updater((state, value: Partial<ProductState>) => ({
    ...state,
    ...value,
  }));

  // *********** Selectors *********** //
 
  readonly first$ = this.select(
    ({ first }) => first
  );

  readonly second$ = this.select(
    ({ second }) => second
  );

  readonly product$ = this.select(
    ({ first, second }) => first * second
  );
}
