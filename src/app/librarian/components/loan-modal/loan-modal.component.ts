import { Component, inject, input, output, signal } from '@angular/core';
import { LoanService } from '../../services/loan.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateLoan, CreatePayment } from '../../interfaces/loan.interface';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { PaymentService } from '../../services/payment.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { TextInputComponent } from 'src/app/forms/components/text-input/text-input.component';
import { codePattern } from 'src/app/forms/validators/patterns';

@Component({
  selector: 'loan-modal',
  imports: [
    ReactiveFormsModule,
    ModalComponent,
    TextInputComponent
  ],
  templateUrl: './loan-modal.component.html',
  styles: ``
})
export class LoanModalComponent {

  public action = input<'loan' | 'payment'>('loan');
  public closeModal = output<void>();
  public saveLoan = output<void>();

  private LoanService = inject(LoanService);
  private alertService = inject(AlertService);
  private paymentService = inject(PaymentService);
  private formBuilder = inject(NonNullableFormBuilder);

  public loanForm = this.formBuilder.group({
    carnet: this.formBuilder.control('', [Validators.required]),
    bookCode: this.formBuilder.control('', [Validators.required, Validators.pattern(codePattern)]),
  });

  public isLoading = signal<boolean>(false);

  constructor() { }

  ngOnInit(): void { }

  private onCreateLoan(body: CreateLoan): void {
    this.LoanService.createLoan(body).subscribe({
      next: () => {
        this.saveLoan.emit();
        this.closeModal.emit();
        this.alertService.showAlert('Prestamo realizado.', 'success');
      },
      error: (error: HttpErrorResponse) => {
        const status = error.status;
        status === HttpStatusCode.NotFound
          ? this.alertService.showAlert('Libro o estudante no encontrado.', 'error')
          : this.alertService.showAlert('No se cumple con algunos requisitos.', 'error');
      }
    });
  }

  private onCreatePayment(body: CreatePayment): void {
    this.paymentService.createPayment(body).subscribe({
      next: () => {
        this.saveLoan.emit();
        this.closeModal.emit();
        this.alertService.showAlert('Se ha registrado tu devolucion.', 'success');
      },
      error: (error: HttpErrorResponse) => {
        const status = error.status;
        status === HttpStatusCode.NotFound
          ? this.alertService.showAlert('Libro o estudante no encontrado.', 'error')
          : this.alertService.showAlert('No se cumple con algunos requisitos.', 'error');
      }
    });
  }

  public onRegisterAction(): void {
    if (this.loanForm.invalid) {
      this.loanForm.markAllAsTouched();
      this.alertService.showAlert('Formulario invalido, porfavor llena los campos', 'error');
      return;
    }
    this.isLoading.set(true);
    const { carnet, bookCode } = this.loanForm.getRawValue();
    const date = (new Date()).toISOString().split('T').shift();
    this.action() === 'payment'
      ? this.onCreatePayment({ carnet, bookCode, paidDate: date! })
      : this.onCreateLoan({ carnet, bookCode, loanDate: date! });
    this.isLoading.set(false);
  }

}
