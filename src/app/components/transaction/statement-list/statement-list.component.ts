import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { TransactionService } from 'src/app/shared/services/transaction.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-statement-list',
  templateUrl: './statement-list.component.html',
  styleUrls: ['./statement-list.component.scss']
})
export class StatementListComponent implements OnInit {

  constructor(
    private userService: UserService,
    private transactionService: TransactionService) { }

  private currentUser: User;

  public statement: TransactionPayload[] = [];

  sortedAscending = false;

  ngOnInit() {
    this.userService.getCurrentUser().subscribe((val) => {
      this.currentUser = val;

      this.statement = this.transactionService.getStatement(this.currentUser.id);
    });
  }

  sortAscending() {
    this.sortedAscending = !this.sortedAscending;

    this.statement = this.sortedAscending ?
      this.statement.sort((a, b) => (a['success'].toString() > b['success'].toString()) ? 1 : ((b['success'].toString() > a['success'].toString()) ? -1 : 0)) :
      this.statement.sort((a, b) => (a['success'].toString() <= b['success'].toString()) ? 1 : ((b['success'].toString() <= a['success'].toString()) ? -1 : 0));

      console.log(this.statement)
  }

  getBrazilianCurrency(val: number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(val);
  }

}
