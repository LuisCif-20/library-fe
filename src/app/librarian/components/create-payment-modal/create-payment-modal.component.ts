import { Component, inject, signal } from '@angular/core';
import { LoanssStore } from '../../stores/loans.store';
import { pipe, switchMap } from 'rxjs';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { LoanModalComponent } from '../loan-modal/loan-modal.component';
import { HoverStyleDirective } from 'src/app/shared/directives/hover-style.directive';

@Component({
  selector: 'create-payment-modal',
  imports: [
    LoanModalComponent,
    HoverStyleDirective
  ],
  templateUrl: './create-payment-modal.component.html',
  styles: ``
})
export class CreatePaymentModalComponent {

  private readonly loansStore = inject(LoanssStore);

  public getLoans = rxMethod<void>(pipe(
    switchMap(() => this.loansStore.getLoans())
  ));

  public showModal = signal<boolean>(false);

}
