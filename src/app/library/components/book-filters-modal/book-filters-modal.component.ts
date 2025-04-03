import { Component, inject, OnInit, signal } from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { HoverStyleDirective } from 'src/app/shared/directives/hover-style.directive';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DateInputComponent } from "../../../forms/components/date-input/date-input.component";
import { ActivatedRoute } from '@angular/router';
import { AuthorItem } from '../../interfaces/author.interface';
import { PublisherItem } from '../../interfaces/publisher.interface';
import { Filters, SomeFilters } from '../../interfaces/books.store.interface';
import { BooksStore } from '../../stores/books.store';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';

const OPTIONS: Options = {
  step: 1,
  getPointerColor: () => '#424A69',
  getSelectionBarColor: () => '#424A69',
}

@Component({
  selector: 'book-filters-modal',
  imports: [
    ReactiveFormsModule,
    HoverStyleDirective,
    ModalComponent,
    NgxSliderModule,
    DateInputComponent
],
  templateUrl: './book-filters-modal.component.html',
  styles: ``
})
export class BookFiltersModalComponent implements OnInit {

  private formBuilder = inject(NonNullableFormBuilder);
  private activatedRoute = inject(ActivatedRoute);
  private readonly booksStore = inject(BooksStore);

  private getBooks = rxMethod<void>(pipe(
    switchMap(() => this.booksStore.getBooks())
  ));
  public showModal = signal<boolean>(false);
  public isLoading = signal<boolean>(false);

  public authors = signal<AuthorItem[]>([]);
  public publishers = signal<PublisherItem[]>([]);

  public priceOptions = signal<Options>({
    floor: 0,
    ceil: 1000,
    translate: (value: number): string => {
      return 'Q ' + value;
    },
    ...OPTIONS
  });

  public quantityOptions = signal<Options>({
    floor: 1,
    ceil: 50,
    ...OPTIONS
  });

  public filtersForm = this.formBuilder.group({
    price: this.formBuilder.control([this.priceOptions().floor, this.priceOptions().ceil]),
    quantity: this.formBuilder.control([this.quantityOptions().floor, this.quantityOptions().ceil]),
    availableCopies: this.formBuilder.control([this.quantityOptions().floor, this.quantityOptions().ceil]),
    publicationStartDate: this.formBuilder.control(''),
    publicationEndDate: this.formBuilder.control(''),
    authors: this.formBuilder.array<FormControl<boolean>>([]),
    publishers: this.formBuilder.array<FormControl<boolean>>([]),
  });

  constructor() { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: ({ authors, publishers }) => {
        this.authors.set(authors);
        this.publishers.set(publishers);
        this.authors().forEach(() => {
          this.filtersForm.controls.authors.push(this.formBuilder.control(false))
        });
        this.publishers().forEach(() => {
          this.filtersForm.controls.publishers.push(this.formBuilder.control(false))
        });
      }
    });
  }

  private getSelectedOptions(items: AuthorItem[] | PublisherItem[], selected: boolean[]): string[] {
    return selected.map((value, index) => {
      return value ? items[index].id : null;
    }).filter((value) => value !== null);
  }

  private prepareFilters(): SomeFilters {
    const {price, quantity, availableCopies, authors, publishers, ...dates} = this.filtersForm.getRawValue();
    const [minPrice, maxPrice] = price;
    const [minQuantity, maxQuantity] = quantity;
    const [minAvailableCopies, maxAvailableCopies] = availableCopies;
    const authorIds = this.getSelectedOptions(this.authors(), authors);
    const publisherIds = this.getSelectedOptions(this.publishers(), publishers);
    return {
      minPrice,
      maxPrice,
      minQuantity,
      maxQuantity,
      minAvailableCopies,
      maxAvailableCopies,
      authorIds,
      publisherIds,
      ...dates
    }
  }

  public applyFilters(): void {
    this.isLoading.set(true);
    const someFilters = this.prepareFilters();
    this.booksStore.patchOtherFilters(someFilters);
    this.getBooks();
    this.isLoading.set(false);
    this.showModal.set(false);
  }

}
