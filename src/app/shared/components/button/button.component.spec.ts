import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  function createSubject() {
    const subject =  new ButtonComponent();
    subject._picButton = true;

    return {
      subject,
    };
  }

  it('should create instance', () => {
    const { subject } = createSubject();
    expect(subject).toBeTruthy();
  });
});
