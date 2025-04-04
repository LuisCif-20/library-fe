import { Component, computed, inject, OnDestroy, OnInit } from '@angular/core';
import { AuthorsStore } from '../../stores/authors.store';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { CreateAuthorModalComponent } from "../../components/create-author-modal/create-author-modal.component";
import { ItemsPerPageComponent } from 'src/app/shared/components/items-per-page/items-per-page.component';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';
import { AuthorsTableComponent } from '../../components/authors-table/authors-table.component';

@Component({
  selector: 'app-authors-page',
  imports: [
    CreateAuthorModalComponent,
    ItemsPerPageComponent,
    PaginationComponent,
    AuthorsTableComponent
  ],
  templateUrl: './authors-page.component.html',
  styles: ``
})
export default class AuthorsPageComponent implements OnInit, OnDestroy {

  public readonly authorsStore = inject(AuthorsStore);

  private getAuthors = rxMethod<void>(pipe(
    switchMap(() => this.authorsStore.getAuthors())
  ));

  public authors = computed(() => this.authorsStore.authors());
  public page = computed(() => this.authorsStore.page());
  public size = computed(() => this.authorsStore.size());

  constructor() { }

  ngOnInit(): void {
    this.getAuthors();
  }

  ngOnDestroy(): void {
    this.authorsStore.patchInitialState();
  }

  public changePage(delta: 1 | -1): void {
    this.authorsStore.patchPage(this.page() + delta);
    this.getAuthors();
  }

  public changeSize(size: number): void {
    this.authorsStore.patchSize(size);
    this.getAuthors();
  }

}
