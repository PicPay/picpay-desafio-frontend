import { CardNumberPipe } from './card-number.pipe';

describe('CardNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new CardNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
