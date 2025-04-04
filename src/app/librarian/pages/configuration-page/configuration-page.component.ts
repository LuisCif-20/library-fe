import { Component, computed, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { environment } from '@envs/environment';
import { ConfigurationService } from 'src/app/core/services/configuration.service';
import { ImageInputComponent } from 'src/app/forms/components/image-input/image-input.component';
import { TextInputComponent } from 'src/app/forms/components/text-input/text-input.component';
import { HoverStyleDirective } from 'src/app/shared/directives/hover-style.directive';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-configuration-page',
  imports: [
    ImageInputComponent,
    TextInputComponent,
    HoverStyleDirective
  ],
  templateUrl: './configuration-page.component.html',
  styles: ``
})
export default class ConfigurationPageComponent {

  private configurationService = inject(ConfigurationService);
  private formBuilder = inject(NonNullableFormBuilder);
  private alertService = inject(AlertService);

  public config = computed(() => this.configurationService.configuration());

  public src = signal<string>(`${environment.AWS_URL}/${this.config()!.logo}`);

  public configForm = this.formBuilder.group({
    name: this.formBuilder.control(this.config()!.name, [Validators.required]),
    imageFile: this.formBuilder.control<Blob | null>(null),
    dailyRate: this.formBuilder.control(this.config()!.dailyRate, [Validators.required]),
    lateFee: this.formBuilder.control(this.config()!.lateFee, [Validators.required]),
    lossFee: this.formBuilder.control(this.config()!.lossFee, [Validators.required]),
    maxLoans: this.formBuilder.control(this.config()!.maxLoans, [Validators.required]),
    loanPeriodDays: this.formBuilder.control(this.config()!.loanPeriodDays, [Validators.required]),
    loanOverdueLimit: this.formBuilder.control(this.config()!.loanOverdueLimit, [Validators.required]),
    phone: this.formBuilder.control(this.config()!.phone, [Validators.required]),
  });

  constructor() { }

  public onUpdateConfig(): void {
    if (this.configForm.invalid) {
      this.alertService.showAlert('Formulario incompleto, porfavor llena los campos.', 'error');
      this.configForm.markAllAsTouched();
      return;
    }
    this.configurationService.updateConfiguration(this.configForm.getRawValue()).subscribe({
      next: () => {
        this.alertService.showAlert('Informacion actualizada.', 'success');
      },
      error: () => {
        this.alertService.showAlert('Algo ocurrio en la actualizacion.', 'error')
      }
    });
  }

}
