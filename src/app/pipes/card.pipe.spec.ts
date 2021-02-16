import { Last4DigitsPipe } from './card.pipe';

describe('Last4DigitsPipe', () => {
  const pipe = new Last4DigitsPipe();

  it('transforms 4111111111111234 to 1234', () => {
    expect(pipe.transform('4111111111111234')).toBe('1234');
  });
});
