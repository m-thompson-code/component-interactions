import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngRerender]'
})
export class RerenderDirective {
  @Input() ngRerender?: string;

  // Access template
  private readonly templateRef = inject(TemplateRef<unknown>);
  // Inject template into parent view
  private readonly viewContainer = inject(ViewContainerRef);

  ngOnChanges(): void {
    this.viewContainer.remove();

    this.viewContainer.createEmbeddedView(this.templateRef);
  }
}
