import { Reserve } from "./reserve.interface";

export interface ReserveState {
  page:         number;
  reserves:     Reserve[];
  size:         number;
  hasNext:      boolean;
  hasPrevious:  boolean;
}
