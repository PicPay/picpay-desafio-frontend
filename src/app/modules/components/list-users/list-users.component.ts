import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services';
import UserType from '../../types/user/user.type';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }
  public users : UserType[];
  public showUsers : UserType[];
  public loading:boolean = true;
  public searchText:string= '';

  ngOnInit() {
    this.getUsers();
  }
  
  search(text: string){
    console.log(text)
    if(text === '' || text === undefined){
      this.showUsers = this.users;
      return 
    };
    
    console.log(this.users.length, this.showUsers.length);
    this.showUsers = this.users.filter(user => {

      return (
        user.name.toLocaleLowerCase().includes(text.trim().toLocaleLowerCase()) || 
        user.username.toLocaleLowerCase().includes(text.trim().toLocaleLowerCase()) ||
        user.id.toString().toLocaleLowerCase().includes(text.trim().toLocaleLowerCase())
      )
    });
    // console.log(this.showUsers
  }

  getUsers(){
    this.usersService.getUsers().subscribe((users: UserType[])=>{
      this.users = this.usersSort(users);
      this.showUsers = this.users
      this.loading = false;
    })
  }

  usersSort(users: UserType[]){
   return users.sort((a, b) =>{
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  })
  }

}
