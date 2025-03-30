import { Component, computed, input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AccountForm } from '../../interfaces/form.interface';
import { TextInputComponent } from '../text-input/text-input.component';

@Component({
  selector: 'app-account-form',
  imports: [
    TextInputComponent
  ],
  templateUrl: './account-form.component.html',
  styles: ``
})
export class AccountFormComponent {

  public form = input<FormGroup<AccountForm> | null>(null);

  public isFormNull = computed(() => this.form() ? false : true);

}
