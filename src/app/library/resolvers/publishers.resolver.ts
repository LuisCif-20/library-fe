import { ResolveFn } from '@angular/router';
import { PublisherItem } from '../interfaces/publisher.interface';
import { inject } from '@angular/core';
import { PublisherService } from '../services/publisher.service';
import { map } from 'rxjs';

export const publishersResolver: ResolveFn<PublisherItem[]> = (route, state) => {
  const publisherService = inject(PublisherService);
  return publisherService.getPublishers().pipe(
    map((res) => res.data)
  );
};
