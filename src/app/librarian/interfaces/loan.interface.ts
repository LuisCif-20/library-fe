import { BookItem } from "src/app/library/interfaces/book.interface";
import { Pagination } from "src/app/shared/interfaces/pagination.interface";
import { Student } from "src/app/shared/interfaces/student.interface";

export interface Loan {
  id:         string;
  loadDate:   string;
  dueDate:    string;
  returnDate: string;
  debt:       number;
  book:       BookItem;
  student:    Student;
}

export interface LoanResponse extends Pagination {
  data: Loan[];
}

export interface CreateLoan {
  carnet:     string;
  bookCode:   string;
  loanDate:   string;
}

export interface CreatePayment {
  carnet:     string;
  bookCode:   string;
  paidDate:   string;
}

