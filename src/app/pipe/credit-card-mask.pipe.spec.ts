import { CreditCardMaskPipe } from './credit-card-mask.pipe';

describe('CreditCardMaskPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditCardMaskPipe();
    expect(pipe).toBeTruthy();
  });
});
