import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-pay-message',
  templateUrl: './pay-message.component.html',
  styleUrls: ['./pay-message.component.scss']
})
export class PayMessageComponent implements OnInit {

  constructor(private modalService: BsModalService) { }

  @Input() payModalMessage: BsModalRef;

  @Input() successMessage: string;
  @Input() errorMessage: string;

  ngOnInit() {
    this.closeModal()
  }


  // loadMessages(){
  //   this.successMessage =  "O pagamento foi concluido com sucesso";
  //   this.errorMessage =  "O pagamento NÃO foi concluido com sucesso.";
  // }

  closeModal() {
    setTimeout(() => {
      // this.payModalMessage.hide();
      this.modalService.hide(1)
    }, 2500);
  }

}
