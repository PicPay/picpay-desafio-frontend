import { HeaderComponent } from './header.component';


describe('HeaderComponent', () => {
  function createSubject() {
    return {
      subject: new HeaderComponent(),
    };
  }

  it('should create instance', () => {
    const { subject } = createSubject();
    expect(subject).toBeTruthy();
  });
});
