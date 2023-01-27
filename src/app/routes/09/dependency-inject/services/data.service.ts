import { Injectable } from '@angular/core';

const UNSET = Symbol('unset');

@Injectable()
export class DataService<T> {
  private value: T | typeof UNSET = UNSET;

  set(value: T): void {
    this.value = value;
  }

  get(): T {
    if (this.value === UNSET) {
      throw new Error('Data value is not set');
    }

    return this.value;
  }
}
