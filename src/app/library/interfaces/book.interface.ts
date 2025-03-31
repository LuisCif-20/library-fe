import { Pagination } from "src/app/shared/interfaces/pagination.interface";

export interface BookItem {
  id:              string;
  author:          string;
  title:           string;
  publicationDate: Date;
  imageUrl:        string;
}

export interface BookResponse extends Pagination {
  data: BookItem[];
}
