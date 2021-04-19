import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PayComponent } from '../../../modal'
import UserType from '../../../../types/user/user.type';
import listCard from '../../../../mock/list-cards/list-cards.mock';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: UserType;
  constructor(public matDialog: MatDialog) { }

  openModal({id, name, username}) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.width = "450px";
    dialogConfig.height = "330px";
    dialogConfig.maxWidth = "97vw"
    dialogConfig.panelClass = 'no-padding-dialog';
    dialogConfig.data = {id, name, username, cards: listCard}
    const modalDialog = this.matDialog.open(PayComponent, dialogConfig);
  }
  
  ngOnInit() {
  }

}
