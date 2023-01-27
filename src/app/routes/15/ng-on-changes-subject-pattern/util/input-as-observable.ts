import { Observable } from "rxjs";

export function inputAsObservable<T>(): <
  K extends keyof T
>(
  key: K
) => Observable<T[K]> {
  // @ts-ignore
  return inputAsObservable(this as T, key);
}
