import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class ProductStateService {
  private readonly _product$ = new ReplaySubject<number>(0);

  readonly product$: Observable<number> = this._product$.asObservable();

  setProduct(first: number, second: number): void {
    this._product$.next(first * second);
  }
}
