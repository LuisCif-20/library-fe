import { BookItem } from "./book.interface";

export interface Filters {
  q?:                     string;
  minPrice?:              number;
  maxPrice?:              number;
  minQuantity?:           number;
  maxQuantity?:           number;
  minAvailableCopies?:    number;
  maxAvailableCopies?:    number;
  publicationStartDate?:  string;
  publicationEndDate?:    string;
  authorIds?:             string[];
  publisherIds?:          string[];
  page:                   number;
  size:                   number;
}

export interface SomeFilters extends Omit<Filters, "page" | "size" | "q"> { }


export interface BooksState {
  books:        BookItem[];
  filters:      Filters;
  hasNext:      boolean;
  hasPrevious:  boolean;
}
