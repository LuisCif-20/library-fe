export interface Pagination {
  totalElements:  number;
  pageNumber:     number;
  totalPages:     number;
  isFirst:        boolean;
  isLast:         boolean;
  hasNext:        boolean;
  hasPrevious:    boolean;
}
