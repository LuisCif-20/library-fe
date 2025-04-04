import { ResolveFn } from '@angular/router';
import { DegreeResponse } from '../interfaces/degree.interface';
import { inject } from '@angular/core';
import { DegreeService } from '../services/degree.service';

export const degreesResolver: ResolveFn<DegreeResponse> = (route, state) => {
  const degreeService = inject(DegreeService);
  return degreeService.getDegrees();
};
