import { Pagination } from "src/app/shared/interfaces/pagination.interface";
import { Author } from "./author.interface";
import { Publisher } from "./publisher.interface";

export interface BookItem {
  id:              string;
  author:          string;
  title:           string;
  publicationDate: Date;
  imageUrl:        string;
}

export interface BookResponse extends Pagination {
  data: BookItem[];
}

export interface Book {
  id:              string;
  author:          Author;
  publisher:       Publisher;
  title:           string;
  isbn:            string;
  code:            string;
  quantity:        number;
  availableCopies: number;
  publicationDate: Date;
  price:           number;
  imageUrl:        string;
}

export interface CreateBook {
  authorId:           string;
  publisherId:        string;
  title:              string;
  code:               string;
  isbn:               string;
  quantity:           number;
  publicationDate:    string;
  price:              number;
  imageFile:          Blob | null;
}

export interface UpdateBook extends Omit<CreateBook, "code" | "isbn"> { }
