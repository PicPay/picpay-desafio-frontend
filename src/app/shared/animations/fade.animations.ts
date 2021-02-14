import { trigger, transition, animate, keyframes, style } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition('in => out', [
    animate(
      '300ms ease-in',
      keyframes([
        style({
          opacity: 1,
        }),
        style({
          opacity: 0,
        }),
      ])
    ),
  ]),
  transition('out => in', [
    animate(
      '700ms ease-in',
      keyframes([
        style({
          opacity: 0,
        }),
        style({
          opacity: 1,
        }),
      ])
    ),
  ]),
]);
