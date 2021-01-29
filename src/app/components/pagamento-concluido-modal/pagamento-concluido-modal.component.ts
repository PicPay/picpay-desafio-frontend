import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagamento-concluido-modal',
  templateUrl: './pagamento-concluido-modal.component.html',
  styleUrls: ['./pagamento-concluido-modal.component.scss']
})
export class PagamentoConcluidoModalComponent implements OnInit {
  @Input() sucesso: boolean;
  @Output() OnClose = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  close(){
    this.OnClose.next();
  }

}
