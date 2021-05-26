import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditCardData } from '@core/data/credit-card.data';
import { ModalService } from '@shared/components/modal/services/modal.service';
import { CreditCard } from '@shared/models/credit-card.model';
import { User } from '@shared/models/user.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  selectedUser: User;
	cards$: Observable<CreditCard[]> = of([]);
	transitionStatus = false;
	
  constructor(
    private route: ActivatedRoute,
    private modalService: ModalService,
    private CreditCardService: CreditCardData
  ) {
    this.getUsers();
  }

  ngOnInit() {
		this.getCards();
	}

	private getUsers() {
		this.users = this.route.snapshot.data.userData;
	}

	private getCards() {
		this.cards$ = this.CreditCardService.getCreditCard();
	}

  openTransaction($event: User): void {
    this.modalService.open("trasanction");
    this.selectedUser = $event;
	}
	
	processStatusMessage($event: boolean): void {		
		this.transitionStatus = $event;
		this.modalService.close("trasanction");
		this.modalService.open("message");
	}
}
