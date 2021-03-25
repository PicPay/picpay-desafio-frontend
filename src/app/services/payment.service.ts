import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root',
})
  @Input('class')
  klass: string;
  message: string;
  apiUrl = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';

  constructor(
    private httpClient: HttpClient,
    private modalService: ModalService
  ) {}

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  sendPayment(transactionPayload): void {
    this.httpClient
      .post(this.apiUrl, transactionPayload)
      .toPromise()
      .then((response: any) => {
        this.message = response.success
          ? 'O pagamento foi concluído com sucesso'
          : 'O pagamento não foi concluído com sucesso';

        this.closeModal('modal-payment');
        this.openModal('modal-notification');

        document.getElementById(
          'notification-message'
        ).innerText = this.message;
      });
  }
}
