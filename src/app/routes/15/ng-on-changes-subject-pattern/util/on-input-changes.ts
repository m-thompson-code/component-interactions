import { OnChanges, SimpleChanges } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

export function onInputChanges<T, K extends keyof T>(
  component: T,
  key: K
): Observable<typeof component[K]> {
  const oldNgOnChanges = (component as Partial<OnChanges>)?.ngOnChanges;

  const subject = new ReplaySubject<T[K]>();

  (component as Partial<OnChanges>).ngOnChanges = function (
    changes: SimpleChanges
  ): void {
    const change = changes[key as any];

    if (change) {
      subject.next(change.currentValue);
    }

    oldNgOnChanges?.apply(component, [changes]);
  };

  return subject.asObservable();
}
