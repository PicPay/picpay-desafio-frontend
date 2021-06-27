import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { HomeService } from '../services/home.service';
import { IUser } from './types';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public userListColumns = ['id', 'name', 'username', 'actions'];
  public users: IUser[] = [];
  public usersList: MatTableDataSource<IUser>;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor( public homeService: HomeService) {}

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList() {
    this.homeService.getUsersList().subscribe((response: IUser[]) => {
      this.usersList = new MatTableDataSource(response);
      this.usersList.paginator = this.paginator;
      this.usersList.sort = this.sort;
    });
  }

  setUser(user:IUser):void{
    console.log(user)
  }

}
