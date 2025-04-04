import { Degree } from "src/app/shared/interfaces/degree.interface";

export interface DegreeState {
  page:         number;
  degrees:      Degree[];
  size:         number;
  hasNext:      boolean;
  hasPrevious:  boolean;
}
