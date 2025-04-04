import { BookItem } from "src/app/library/interfaces/book.interface";
import { Pagination } from "src/app/shared/interfaces/pagination.interface";
import { Student } from "src/app/shared/interfaces/student.interface";

export interface Reserve {
  id:               string;
  reservationDate:  string;
  expirationDate:   string;
  book:             BookItem;
  student:          Student;
}

export interface ReserveResponse extends Pagination {
  data: Reserve[];
}

