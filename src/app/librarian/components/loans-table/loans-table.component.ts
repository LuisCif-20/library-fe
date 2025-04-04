import { Component, inject, input } from '@angular/core';
import { Loan } from '../../interfaces/loan.interface';
import { LoanssStore } from '../../stores/loans.store';
import { LoanService } from '../../services/loan.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { environment } from '@envs/environment';
import { HoverStyleDirective } from 'src/app/shared/directives/hover-style.directive';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'loans-table',
  imports: [
    HoverStyleDirective,
    CurrencyPipe
  ],
  templateUrl: './loans-table.component.html',
  styles: ``
})
export class LoansTableComponent {

  public loans = input<Loan[]>([]);

  public readonly loansStore = inject(LoanssStore);
  private loanService = inject(LoanService);
  private alertService = inject(AlertService);

  private getLoans = rxMethod<void>(pipe(
    switchMap(() => this.loansStore.getLoans())
  ));

  constructor() { }

  public getUrl(image: string): string {
    return `${environment.AWS_URL}/${image}`;
  }

  public onDelete(id: string): void {
    this.loanService.deleteLoan(id).subscribe({
      next: () => {
        this.alertService.showAlert('El prestamo fue eliminado.', 'success');
        this.getLoans();
      },
      error: () => {
        this.alertService.showAlert('El prestamo no existe.', 'warning');
      }
    });
  }

}
