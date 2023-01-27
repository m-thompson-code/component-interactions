import {
  ChangeDetectorRef,
  EmbeddedViewRef,
  Inject,
  Pipe,
  PipeTransform,
} from '@angular/core';

@Pipe({
  name: 'pure',
  pure: true,
})
export class PurePipe implements PipeTransform {
  constructor(
    @Inject(ChangeDetectorRef)
    private readonly viewRef: EmbeddedViewRef<unknown>
  ) {}

  transform<T extends (...args: any) => any>(
    fn: T,
    ...args: [...Parameters<T>]
  ): ReturnType<T> {
    return fn.apply(this.viewRef.context, args);
  }

  /**
   * An alternate idea where you can also pass `context` to change the `this` for the callable function. Seeing how templates assume `this` is the Component instance of the template, I don't see a reason to include this functionality
   *
   * -
   *
   * Same as `transform`, no spread operator for args:
   *
   * from
   *
   * ```
   * {{ fn | pure:arg1:arg2:arg3 }}
   * ```
   * to
   *
   * ```
   * {{ fn | pure:[arg1, arg2, arg3] }}
   * ```
   *
   * This would allow for changing context so that the caller isn't assumed to be the Component:
   * ```
   * {{ fn | pure:[arg1, arg2, arg3]:<some-other-this-context> }}
   * ```
   */
  transformWithContext<T extends (...args: any) => any>(
    fn: T,
    args: [...Parameters<T>],
    context?: unknown
  ): ReturnType<T> {
    return fn.apply(context ?? this.viewRef.context, args);
  }
}
