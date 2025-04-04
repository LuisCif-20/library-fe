import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, pipe, Subscription, switchMap } from 'rxjs';
import { BooksStore } from '../../stores/books.store';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

@Component({
  selector: 'search-input',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './search-input.component.html',
  styles: ``
})
export class SearchInputComponent implements OnInit, OnDestroy {

  private formBuilder = inject(NonNullableFormBuilder);
  private readonly booksStore = inject(BooksStore);

  private subs?: Subscription;
  private getBooks = rxMethod<void>(pipe(
    switchMap(() => this.booksStore.getBooks())
  ));

  public searchControl = this.formBuilder.control('');

  constructor() { }

  ngOnInit(): void {
    this.subs = this.searchControl.valueChanges.pipe(
      debounceTime(500)
    ).subscribe({
      next: (value) => {
        this.booksStore.patchInitialState();
        this.booksStore.patchQ(value);
        this.getBooks();
      }
    })
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

}
