import { Component, inject, signal } from '@angular/core';
import { LoanssStore } from '../../stores/loans.store';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { HoverStyleDirective } from 'src/app/shared/directives/hover-style.directive';
import { LoanModalComponent } from '../loan-modal/loan-modal.component';

@Component({
  selector: 'create-loan-modal',
  imports: [
    LoanModalComponent,
    HoverStyleDirective
  ],
  templateUrl: './create-loan-modal.component.html',
  styles: ``
})
export class CreateLoanModalComponent {

  private readonly loansStore = inject(LoanssStore);

  public getLoans = rxMethod<void>(pipe(
    switchMap(() => this.loansStore.getLoans())
  ));

  public showModal = signal<boolean>(false);

}
