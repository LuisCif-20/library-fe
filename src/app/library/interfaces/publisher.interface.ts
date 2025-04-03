import { Pagination } from "src/app/shared/interfaces/pagination.interface";

export interface PublisherItem {
  id:          string;
  name:        string;
}

export interface PublisherResponse extends Pagination {
  data: PublisherItem[];
}
