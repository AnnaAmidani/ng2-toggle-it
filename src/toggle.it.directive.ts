import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ToggleItService } from './toggle.it.service';

// Structural Directives, see http://a2.hubwiz.com/docs/ts/latest/guide/structural-directives.html
@Directive({
  selector: '[toggleIt]'
})
export class ToggleItDirective {

  constructor(
    private toggleItService: ToggleItService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set toggleIt(addFeature: boolean) {
    if (addFeature) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
