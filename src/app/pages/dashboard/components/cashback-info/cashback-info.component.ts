import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cashback-info',
  templateUrl: './cashback-info.component.html',
  styleUrls: ['./cashback-info.component.scss']
})
export class CashbackInfoComponent implements OnInit {

  readonly URL_CASHBACK = environment.url_info_cashback;

  constructor() { }

  ngOnInit() {
  }

}
