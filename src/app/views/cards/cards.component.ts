import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToCardCreate(): void {
    this.router.navigate(['cards/create'])
  }

}
