import { Publisher } from "src/app/library/interfaces/publisher.interface";

export interface PublisherState {
  page:         number;
  publishers:   Publisher[];
  size:         number;
  hasNext:      boolean;
  hasPrevious:  boolean;
}
