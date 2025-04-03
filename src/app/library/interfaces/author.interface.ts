import { Pagination } from "src/app/shared/interfaces/pagination.interface";

export interface AuthorItem {
  id:          string;
  name:        string;
  nationality: string;
  birthDate:   Date;
}

export interface AuthorResponse extends Pagination {
  data: AuthorItem[];
}
