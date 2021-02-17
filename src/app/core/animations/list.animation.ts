import {
  animateChild,
  query,
  stagger,
  transition,
  trigger,
} from '@angular/animations';

export const listAnimation = trigger('list', [
  transition(':enter', [query('@items', stagger(300, animateChild()))]),
]);
