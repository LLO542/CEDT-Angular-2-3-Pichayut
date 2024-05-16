import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomStructuralDirective]',
  standalone: true
})
export class CustomStructuralDirectiveDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input('appCustomStructuralDirective')
  appCustomStructuralDirective!: number;

  ngOnInit() {
    this.viewContainer.createEmbeddedView(this.templateRef);
    for (let i = 0; i < this.appCustomStructuralDirective; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}
