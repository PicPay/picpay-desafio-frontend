import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { createMockFor } from '../../../../../test.utils';
import { PaymentsRepositoryService } from './payments-repository.service';


describe('PaymentsRepositoryService', () => {
  function createSubject({ http = createMockFor(HttpClient) } = {}) {
    http.post.mockReturnValue(of([]))
    return {
      subject: new PaymentsRepositoryService(http),
      http,
    };
  }

  it('should create instance', () => {
    const { subject } = createSubject();
    expect(subject).toBeTruthy();
  });

  it('should execute a payment', () => {
    const { subject, http } = createSubject();

    subject.insert({}).subscribe(resp => expect(resp).toBeTruthy());

    expect(http.post).toHaveBeenCalled();
  })
});
