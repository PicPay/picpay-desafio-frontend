import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

const placeholder: string = '/assets/img/user_placeholder.png';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input()
  user: User;

  @Input()
  isPayableCard: boolean = true;

  @Input()
  isSimpleCard: boolean = false;

  transaction: any;

  showPayableCard: boolean = false;

  showReceiptCard: boolean = false;

  success: boolean = false;

  isFavorite: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.setPlaceholderIfImageIsInvalid();

    const favorites = this.getFavorites();

    if (this.user && this.user.id && favorites && favorites.some(f => f === this.user.id))
      this.isFavorite = true;
  }

  private setPlaceholderIfImageIsInvalid(): void {
    if (this.user && !this.user.img)
      this.user.img = placeholder;
  }

  openPayableCard() {
    if (this.isPayableCard)
      this.showPayableCard = true;
  }

  openReceiptModal(event: any) {
    if (event) {
      this.success = event['success'];
    }

    this.transaction = event;

    this.showPayableCard = false;

    this.showReceiptCard = true;
  }

  getFavorites() {
    return this.userService.getFavoriteUsersIds();
  }

  addInFavorites() {
    if (this.user && this.user.id) {
      if (!this.isFavorite) {
        this.userService.addFavoriteUser(this.user.id);
      } else {
        this.userService.removeFavoriteUser(this.user.id);
      }
    }

    this.isFavorite = !this.isFavorite;
  }
}