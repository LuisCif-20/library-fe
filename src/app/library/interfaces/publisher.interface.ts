import { Pagination } from "src/app/shared/interfaces/pagination.interface";

export interface Publisher {
  id:          string;
  name:        string;
}

export interface PublisherResponse extends Pagination {
  data: Publisher[];
}

export interface PublisherData extends Omit<Publisher, 'id'> { }
