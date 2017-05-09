import { Directive, Input, OnInit, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

//Structural Directives, see http://a2.hubwiz.com/docs/ts/latest/guide/structural-directives.html
@Directive({ 
  selector: '[toggleIt]' 
})
export class ToggleItDirective implements OnInit, OnDestroy {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set toggleIt(shouldAddFeature: boolean) {
    if (shouldAddFeature) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }  

  public ngOnInit() {
    console.log('Directive initialised successfully!');
  }

  public ngOnDestroy() {
    console.log('Directive destroyed successfully!');
  }

}
