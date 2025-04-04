import { Component, computed, inject } from '@angular/core';
import { ReservationStore } from '../../store/reserves.store';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { ItemsPerPageComponent } from 'src/app/shared/components/items-per-page/items-per-page.component';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';
import { ReservationCardComponent } from '../../components/reservation-card/reservation-card.component';

@Component({
  selector: 'app-reserves-page',
  imports: [
    ItemsPerPageComponent,
    PaginationComponent,
    ReservationCardComponent
  ],
  templateUrl: './reserves-page.component.html',
  styles: ``
})
export default class ReservesPageComponent {

  public readonly reservationStore = inject(ReservationStore);

  private getReserves = rxMethod<void>(pipe(
    switchMap(() => this.reservationStore.getReserves())
  ));

  public reserves = computed(() => this.reservationStore.reserves());
  public page = computed(() => this.reservationStore.page());
  public size = computed(() => this.reservationStore.size());

  constructor() { }

  ngOnInit(): void {
    this.getReserves();
  }

  ngOnDestroy(): void {
    this.reservationStore.patchInitialState();
  }

  public changePage(delta: 1 | -1): void {
    this.reservationStore.patchPage(this.page() + delta);
    this.reserves();
  }

  public changeSize(size: number): void {
    this.reservationStore.patchSize(size);
    this.reserves();
  }

}
