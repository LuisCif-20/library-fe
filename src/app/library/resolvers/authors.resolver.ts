import { ResolveFn } from '@angular/router';
import { AuthorItem } from '../interfaces/author.interface';
import { inject } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { map } from 'rxjs';

export const authorsResolver: ResolveFn<AuthorItem[]> = (route, state) => {
  const authorService = inject(AuthorService);
  return authorService.getAuthors().pipe(
    map((res) => res.data)
  );
};
