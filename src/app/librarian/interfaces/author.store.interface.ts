import { Author } from "src/app/library/interfaces/author.interface";

export interface AuthorState {
  page:         number;
  authors:      Author[];
  size:         number;
  hasNext:      boolean;
  hasPrevious:  boolean;
}
