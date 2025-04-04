import { Loan } from "./loan.interface";

export interface LoanState {
  page:         number;
  loans:        Loan[];
  size:         number;
  hasNext:      boolean;
  hasPrevious:  boolean;
}
