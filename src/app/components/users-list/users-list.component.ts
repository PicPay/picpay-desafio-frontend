import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Card } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users$: Observable<User[]>;
  userId: number;
  enabled$ = new BehaviorSubject<boolean>(false);
  cards: Card[] = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];

  transactionForm = this.fb.group({
    card: [null, [Validators.required]],
    destination_user_id: ['', [Validators.required]],
    value: ['', [Validators.required]],
  });

  transactionStatus: boolean = false;
  transactionMessage: string = '';
  formError: string = '';

  constructor(private api: ApiService, private fb: FormBuilder) {}

  ngOnInit() {
    this.users$ = this.api.getUsers();
  }

  showModal(id: number) {
    this.transactionForm.patchValue({
      destination_user_id: id,
    });
    this.enabled$.next(true);
  }

  handlePayment() {
    if (this.transactionForm.dirty && this.transactionForm.valid) {
      const campos = {
        card_number: this.transactionForm.get('card').value.card_number,
        cvv: this.transactionForm.get('card').value.cvv,
        expiry_date: this.transactionForm.get('card').value.expiry_date,
        destination_user_id: this.transactionForm.get('destination_user_id')
          .value,
        value: this.transactionForm.get('value').value,
      };
      this.api.createTransaction(campos).subscribe((result) => {
        this.enabled$.next(false);
        if (result.success) {
          this.transactionMessage = 'O pagamento foi concluido com sucesso.';
        } else {
          this.transactionMessage =
            'O pagamento <strong>não</strong> foi concluido com sucesso.';
        }
        this.formError = '';
        this.transactionStatus = true;
        this.transactionForm.reset();
      });
    } else {
      this.formError = 'Valor e/ou Cartão validado(s)';
    }
  }
}
