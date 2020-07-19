import { MaskNumber } from './card.pipe';

describe('CardPipe', () => {
  it('create an instance', () => {
    const pipe = new MaskNumber();
    expect(pipe).toBeTruthy();
  });
});
