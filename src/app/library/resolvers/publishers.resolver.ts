import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { PublisherService } from '../services/publisher.service';
import { map } from 'rxjs';
import { SelectOption } from 'src/app/forms/interfaces/select-input.interface';

export const publishersResolver: ResolveFn<SelectOption[]> = (route, state) => {
  const publisherService = inject(PublisherService);
  return publisherService.getPublishers().pipe(
    map((res) => ([
      ...res.data.map((value) => ({
        value: value.id,
        label: value.name
      }))
    ]))
  );
};
