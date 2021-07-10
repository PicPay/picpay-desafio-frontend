import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
import { UserAccountsService } from 'src/app/shared/services/user-accounts.service';
import { UserAccount } from 'src/app/shared/model/user-account.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public userAccounts: UserAccount[];
  public userSelected: any;
  public receiptResult: any;
  public isOpenedPayment: boolean = false;
  public isOpenedReceiptPayment: boolean = false;
  public userAccounts$: Observable<UserAccount[]>;
  public filter: FormControl;
  public filter$: Observable<string>;
  public filteredUsers$: Observable<UserAccount[]>;

  constructor(private userAccountsService: UserAccountsService) { }

  ngOnInit() {
    this.getUserAccounts();
  }
  
  /**
   * Obtém todos os contatos para pagamento, filtrado pelo nome.
   * 
   */
  getUserAccounts() {
    this.userAccounts$ = this.userAccountsService.getUserAccounts();
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      distinctUntilChanged()
    );
    this.filteredUsers$ = combineLatest(this.userAccounts$, this.filter$).pipe(
      map(([users, filterString]) => users.filter(user => user.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
    );
  }

  openPaymentModal(userSelected: UserAccount) {
    this.userSelected = userSelected;
    this.isOpenedPayment = true;
  }

  closePaymentModal(result: { status: string, success: boolean }) {
    this.isOpenedPayment = false;

    if (result) {
      this.isOpenedReceiptPayment = true;
      this.receiptResult = result;
    }
  }

  closePaymentReceiptModal() {
    this.isOpenedReceiptPayment = false
  }
}
