import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleItComponent } from './toggle.it.component';
import { ToggleItDirective } from './toggle.it.directive';
import { ToggleItService } from './toggle.it.service';

export * from './toggle.it.component';
export * from './toggle.it.directive';
export * from './toggle.it.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToggleItComponent,
    ToggleItDirective
  ],
  exports: [
    ToggleItComponent,
    ToggleItDirective
  ]
})
export class ToggleItModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ToggleItModule,
      providers: [ToggleItService]
    };
  }
}
