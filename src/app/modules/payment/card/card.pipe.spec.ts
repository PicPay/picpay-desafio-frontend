import { MaskNumber } from './card.pipe';

describe('CardPipe', () => {
  let pipe: MaskNumber;

  beforeEach(() => {
    pipe = new MaskNumber();
  });

  it('instanciado', () => {
    expect(pipe).toBeTruthy();
  });

  it('enviando um valor retorna a máscara', () => {
    expect(pipe.transform('1111111111111111', 'maskNumber')).toBe('**** **** **** 1111');
  });
});
