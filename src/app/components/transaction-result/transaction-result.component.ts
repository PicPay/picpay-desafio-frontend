import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction-service/transaction.service';

@Component({
  selector: 'app-transaction-result',
  templateUrl: './transaction-result.component.html',
  styleUrls: ['./transaction-result.component.scss']
})
export class TransactionResultComponent implements OnInit, AfterViewInit {

  @Input() result: 'success' | 'fail';

  constructor( public transactionService: TransactionService ) { }

  ngOnInit() { }

  ngAfterViewInit() { }

}
