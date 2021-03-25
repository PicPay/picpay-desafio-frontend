import { Component, OnInit } from '@angular/core';
import { User } from '@shared/interfaces/user';
import { PicPayService } from '@shared/services/picpay.service';

@Component({
  selector: 'ngx-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {
  users: User[] | null = null;

  constructor(private picPayService: PicPayService) {}

  ngOnInit(): void {
    this.picPayService.users().subscribe((users: User[]) => (this.users = users));
  }
}
