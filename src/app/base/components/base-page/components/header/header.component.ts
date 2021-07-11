import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/core/entities/card.model';
import { CardHandlerService } from 'src/app/shared/services/card-handler/card-handler.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  onCardButtonClick = new EventEmitter<void>();

  cards$: Observable<Card[]>;

  constructor(private cardHandlerService: CardHandlerService) { }

  ngOnInit() {
    this.cards$ = this.cardHandlerService.cardsState$;
  }

}
