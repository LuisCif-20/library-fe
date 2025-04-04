import { Pagination } from "src/app/shared/interfaces/pagination.interface";

export interface Author {
  id:          string;
  name:        string;
  nationality: string;
  birthDate:   Date;
}

export interface AuthorResponse extends Pagination {
  data: Author[];
}
