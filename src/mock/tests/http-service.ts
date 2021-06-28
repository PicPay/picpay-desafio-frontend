import { of } from 'rxjs';

export const httpServiceStub = {
  get: () => of([]),
  post: () => of(null)
};
