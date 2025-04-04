import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { map } from 'rxjs';
import { SelectOption } from 'src/app/forms/interfaces/select-input.interface';

export const authorsResolver: ResolveFn<SelectOption[]> = (route, state) => {
  const authorService = inject(AuthorService);
  return authorService.getAuthors().pipe(
    map((res) => ([
      ...res.data.map((value) => ({
        value: value.id,
        label: value.name
      }))
    ]))
  );
};
