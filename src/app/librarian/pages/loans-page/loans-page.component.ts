import { Component, computed, inject } from '@angular/core';
import { CreateLoanModalComponent } from "../../components/create-loan-modal/create-loan-modal.component";
import { CreatePaymentModalComponent } from "../../components/create-payment-modal/create-payment-modal.component";
import { LoanssStore } from '../../stores/loans.store';
import { pipe, switchMap } from 'rxjs';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { ItemsPerPageComponent } from 'src/app/shared/components/items-per-page/items-per-page.component';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';
import { LoansTableComponent } from "../../components/loans-table/loans-table.component";

@Component({
  selector: 'app-loans-page',
  imports: [
    CreateLoanModalComponent,
    CreatePaymentModalComponent,
    ItemsPerPageComponent,
    PaginationComponent,
    LoansTableComponent
],
  templateUrl: './loans-page.component.html',
  styles: ``
})
export default class LoansPageComponent {

  public readonly laonsStore = inject(LoanssStore);

  private getLoans = rxMethod<void>(pipe(
    switchMap(() => this.laonsStore.getLoans())
  ));

  public loans = computed(() => this.laonsStore.loans());
  public page = computed(() => this.laonsStore.page());
  public size = computed(() => this.laonsStore.size());

  constructor() { }

  ngOnInit(): void {
    this.getLoans();
  }

  ngOnDestroy(): void {
    this.laonsStore.patchInitialState();
  }

  public changePage(delta: 1 | -1): void {
    this.laonsStore.patchPage(this.page() + delta);
    this.getLoans();
  }

  public changeSize(size: number): void {
    this.laonsStore.patchSize(size);
    this.getLoans();
  }

}
