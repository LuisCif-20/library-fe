import { Component, computed, inject, OnDestroy, OnInit } from '@angular/core';
import { DegreesStore } from '../../stores/degrees.store';
import { pipe, switchMap } from 'rxjs';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { CreateDegreeModalComponent } from '../../components/create-degree-modal/create-degree-modal.component';
import { ItemsPerPageComponent } from 'src/app/shared/components/items-per-page/items-per-page.component';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';
import { DegreesTableComponent } from '../../components/degrees-table/degrees-table.component';

@Component({
  selector: 'app-degrees-page',
  imports: [
    CreateDegreeModalComponent,
    ItemsPerPageComponent,
    PaginationComponent,
    DegreesTableComponent
  ],
  templateUrl: './degrees-page.component.html',
  styles: ``
})
export default class DegreesPageComponent implements OnInit, OnDestroy {

  public readonly degreesStore = inject(DegreesStore);

  private getDegrees = rxMethod<void>(pipe(
    switchMap(() => this.degreesStore.getDegrees())
  ));

  public degrees = computed(() => this.degreesStore.degrees());
  public page = computed(() => this.degreesStore.page());
  public size = computed(() => this.degreesStore.size());

  constructor() { }

  ngOnInit(): void {
    this.getDegrees();
  }

  ngOnDestroy(): void {
    this.degreesStore.patchInitialState();
  }

  public changePage(delta: 1 | -1): void {
    this.degreesStore.patchPage(this.page() + delta);
    this.getDegrees();
  }

  public changeSize(size: number): void {
    this.degreesStore.patchSize(size);
    this.getDegrees();
  }


}
