import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentComponent } from 'src/app/shared/ui/payment/payment.component';
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
  public users: IUser[] | null = null;
  public usersList: MatTableDataSource<IUser> = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public homeService: HomeService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList(): void {
    // tslint:disable-next-line: deprecation
    this.homeService.getUsersList().subscribe((response: IUser[]) => {
      this.usersList = new MatTableDataSource(response);
      this.usersList.paginator = this.paginator;
      this.usersList.sort = this.sort;
    });
  }

  openModal(user: IUser): void {
    this.homeService.updateSelectedUser(user);
    this.dialog.open(PaymentComponent);
  }

}
