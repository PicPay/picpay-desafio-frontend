import { Component, OnInit } from '@angular/core'
import { User, Card } from 'src/app/core/domain/models'
import { GET_CARDS_MOCK } from '../../data/test/index'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  paymentForm = false
  settedUser: User
  cards: Card[]

  constructor() {}

  ngOnInit() {
    this.cards = GET_CARDS_MOCK
  }
  handlePayUser(user: User) {
    this.settedUser = user
    this.paymentForm = true
  }
}
