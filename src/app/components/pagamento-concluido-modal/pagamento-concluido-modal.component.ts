import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagamento-concluido-modal',
  templateUrl: './pagamento-concluido-modal.component.html',
  styleUrls: ['./pagamento-concluido-modal.component.scss']
})
export class PagamentoConcluidoModalComponent implements OnInit {
  @Output() OnClose = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  close(){
    this.OnClose.next();
  }

}
