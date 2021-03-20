import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-recibo-pagamento',
  templateUrl: './modal-recibo-pagamento.component.html',
  styleUrls: ['./modal-recibo-pagamento.component.scss']
})
export class ModalReciboPagamentoComponent implements OnInit {

  constructor(
    public dialogModalReciboPagamento: MatDialogRef<ModalReciboPagamentoComponent>
  ) { }

  ngOnInit() {
  }

}
