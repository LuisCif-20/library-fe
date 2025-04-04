import { Pagination } from "./pagination.interface";

export interface Degree {
  id:   string;
  code: number;
  name: string;
}

export interface DegreeResponse extends Pagination {
  data: Degree[]
}

export interface DegreeData extends Omit<Degree, 'id'> {}
