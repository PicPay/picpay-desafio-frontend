import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.scss']
})
export class BarraPesquisaComponent implements OnInit {
  @Output() pesquisar = new EventEmitter();
  termoPesquisa: string;

  constructor() { }

  ngOnInit() {
  }

}
