import { Component, input, output } from '@angular/core';

import { HoverStyleDirective } from 'src/app/shared/directives/hover-style.directive';

@Component({
  selector: 'form-step-navigation',
  imports: [
    HoverStyleDirective
  ],
  templateUrl: './form-step-navigation.component.html',
  styles: ``
})
export class FormStepNavigationComponent {

  public isFirstStep = input<boolean>(false);
  public isLastStep = input<boolean>(false);
  public isLoading = input<boolean>(false);
  public next = output<void>();
  public prev = output<void>();

}
