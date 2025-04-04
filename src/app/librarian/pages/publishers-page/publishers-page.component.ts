import { Component, computed, inject, OnDestroy, OnInit } from '@angular/core';
import { CreatePublisherModalComponent } from "../../components/create-publisher-modal/create-publisher-modal.component";
import { PublishersTableComponent } from "../../components/publishers-table/publishers-table.component";
import { ItemsPerPageComponent } from 'src/app/shared/components/items-per-page/items-per-page.component';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';
import { PublishersStore } from '../../stores/publishers.store';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';

@Component({
  selector: 'app-publishers-page',
  imports: [
    CreatePublisherModalComponent,
    PublishersTableComponent,
    ItemsPerPageComponent,
    PaginationComponent
  ],
  templateUrl: './publishers-page.component.html',
  styles: ``
})
export default class PublishersPageComponent implements OnInit, OnDestroy {

  public readonly publishersStore = inject(PublishersStore);

  private getPublishers = rxMethod<void>(pipe(
    switchMap(() => this.publishersStore.getPublishers())
  ));

  public publishers = computed(() => this.publishersStore.publishers());
  public page = computed(() => this.publishersStore.page());
  public size = computed(() => this.publishersStore.size());

  constructor() { }

  ngOnInit(): void {
    this.getPublishers();
  }

  ngOnDestroy(): void {
    this.publishersStore.patchInitialState();
  }

  public changePage(delta: 1 | -1): void {
    this.publishersStore.patchPage(this.page() + delta);
    this.getPublishers();
  }

  public changeSize(size: number): void {
    this.publishersStore.patchSize(size);
    this.getPublishers();
  }

}
