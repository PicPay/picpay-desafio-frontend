import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit {

  constructor(private userService: UserService) { }

  favorites: User[] = []

  ngOnInit() {
    let favoritesIds = this.userService.getFavoriteUsersIds();

    this.userService.getUsersByIds(favoritesIds).subscribe((val) => {
      this.favorites = val;
    });
  }

}