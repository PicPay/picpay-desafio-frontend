import { Component, OnInit } from '@angular/core';
import { UserService } from '@service/user.service';
import { User } from '@model/user';
import { dynamicSort } from 'src/app/utils/sort';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public users: User[]

  constructor(private userService: UserService){
  }

  ngOnInit() {
    this.getAllUser()
  }

  getAllUser(){
    this.userService.getAll().subscribe(response =>{
      response.sort(dynamicSort('name'))
      this.users = response
    })
  }

}
