import { Component, OnInit } from '@angular/core';
import { UserService } from '@service/user.service';
import { User } from '@model/user';
import { dynamicSort } from 'src/app/utils/sort';
import { MatDialog } from '@angular/material/dialog';
import { TransactionComponent } from './transaction/transaction.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: boolean;

  private LIST_ORIENTATION = 'name'

  public users: User[]

  constructor(private userService: UserService, public dialog: MatDialog){
  }

  ngOnInit() {
    this.getAllUser()
  }

  getAllUser(){
    this.loading = true;
    this.userService.getAll().subscribe(response =>{
      response.sort(dynamicSort(this.LIST_ORIENTATION))
      this.users = response
      this.loading = false;
    },()=>{
      this.loading = false;
    })
  }

  openPay(user: User){
    const dialogRef = this.dialog.open(TransactionComponent, {
      width: '350px',
      
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

}
