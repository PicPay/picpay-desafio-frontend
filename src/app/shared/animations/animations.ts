import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const cardFlip = trigger('cardFlip', [
  state(
    'default',
    style({
      transform: 'none',
    })
  ),
  state(
    'flipped',
    style({
      transform: 'rotateX(180deg)',
    })
  ),
  transition('default => flipped', [animate('400ms')]),
  transition('flipped => default', [animate('200ms')]),
]);
