
import { CardService } from './../card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.scss']
})
export class CardCreateComponent implements OnInit {

  constructor(
    private cardService: CardService,

    ) { }

  ngOnInit() {
    this.cardService.showOnConsole("teste")
  }


}
