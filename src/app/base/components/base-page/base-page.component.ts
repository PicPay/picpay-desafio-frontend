import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/core/entities/card.model';
import { CardHandlerService } from 'src/app/shared/services/card-handler/card-handler.service';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss']
})
export class BasePageComponent implements OnInit {
  cards$: Observable<Card[]>;

  constructor(private cardHandlerService: CardHandlerService) { }

  ngOnInit() {
    this.cards$ = this.cardHandlerService.cardsState$;
  }

}
