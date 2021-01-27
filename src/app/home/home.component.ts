import { Component, OnInit } from '@angular/core';
import { UserService } from '@service/user.service';
import { User } from '../model/user';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public users: User[];

  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  
  constructor(private userService: UserService){
  }

  ngOnInit() {
    this.getAllUser()
  }

  getAllUser(){
    this.userService.getAll().subscribe(response =>{
      this.users = response
    })
  }

}
