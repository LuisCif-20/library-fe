import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, inject, input, output, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextInputComponent } from 'src/app/forms/components/text-input/text-input.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { Degree, DegreeData } from 'src/app/shared/interfaces/degree.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DegreeService } from 'src/app/shared/services/degree.service';

@Component({
  selector: 'degree-modal',
  imports: [
    ReactiveFormsModule,
    ModalComponent,
    TextInputComponent
  ],
  templateUrl: './degree-modal.component.html',
  styles: ``
})
export class DegreeModalComponent {

  public degree = input<Degree>();
  public closeModal = output<void>();
  public saveDegree = output<void>();

  private degreeService = inject(DegreeService);
  private alertService = inject(AlertService);
  private formBuilder = inject(NonNullableFormBuilder);

  public degreeForm = this.formBuilder.group({
    name: this.formBuilder.control('', [Validators.required]),
    code: this.formBuilder.control('', [Validators.required]),
  });

  public isLoading = signal<boolean>(false);

  constructor() { }

  ngOnInit(): void {
    if (this.degree()) {
      const { name, code } = this.degree()!;
      this.degreeForm.patchValue({
        name,
        code: code.toString()
      });
      this.degreeForm.updateValueAndValidity();
    }
  }

  private onCreateDegree(body: DegreeData): void {
    this.degreeService.createDegree(body).subscribe({
      next: () => {
        this.saveDegree.emit();
        this.closeModal.emit();
        this.alertService.showAlert('Author creado con exito.', 'success');
      },
      error: (error: HttpErrorResponse) => {
        const status = error.status;
        status === HttpStatusCode.BadRequest
          ? this.alertService.showAlert('Datos duplicados o invalidos.', 'error')
          : this.alertService.showAlert('Algo salio mal.', 'error');
      }
    });
  }

  private onUpdateDegree(body: DegreeData): void {
    this.degreeService.updateDegree(this.degree()!.id, body).subscribe({
      next: () => {
        this.saveDegree.emit();
        this.closeModal.emit();
        this.alertService.showAlert('Author actualizado con exito.', 'success');
      },
      error: (error: HttpErrorResponse) => {
        const status = error.status;
        status === HttpStatusCode.BadRequest
          ? this.alertService.showAlert('Datos duplicados o invalidos.', 'error')
          : this.alertService.showAlert('Algo salio mal.', 'error');
      }
    });
  }

  public onSaveDegree(): void {
    if (this.degreeForm.invalid) {
      this.degreeForm.markAllAsTouched();
      this.alertService.showAlert('Formulario invalido, porfavor llena los campos', 'error');
      return;
    }
    this.isLoading.set(true);
    const { name, code } = this.degreeForm.getRawValue();
    this.degree()
      ? this.onUpdateDegree({ name, code: Number(code) })
      : this.onCreateDegree({ name, code: Number(code) });
    this.isLoading.set(false);
  }

}
