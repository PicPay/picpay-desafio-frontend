import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {

  // Botão recebe como input o nome que ele vai ter e o tipo pra configurar o CSS no HTML.
  @Input() nomeBotao: string;
  @Input() typeButton: string;

  constructor(
  ) { }

  ngOnInit() {
  }

}
