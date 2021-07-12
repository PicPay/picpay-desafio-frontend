import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Subscription } from 'rxjs';
import { TransactionPayload } from 'src/app/core/entities/payloads/transaction-payload.model';
import { User } from 'src/app/core/entities/user.model';
import { TransactionControllerService } from 'src/app/pages/controllers/transaction-controller/transaction-controller.service';
import { SimpleMessageComponent } from 'src/app/shared/components/dialogs/simple-message/simple-message.component';
import { CardHandlerService } from 'src/app/shared/services/card-handler/card-handler.service';
import { PaymentFormComponent } from '../../../dialogs/payment-form/payment-form.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnDestroy {
  @Input()
  user: User;

  subscriptions = new Subscription();

  constructor(
    public dialog: MatDialog,
    private transactionControllerService: TransactionControllerService,
    private cardHandlerService: CardHandlerService,
  ) {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  pay(user: User): void {
    const config = new MatDialogConfig();
    config.data = { user };

    const modal = this.dialog.open(PaymentFormComponent, config);

    this.subscriptions.add(
      modal.afterClosed().subscribe((event: number) => {
        if (event) {
          this.sendRequestTransaction(user, event);
        }
      })
    );
  }

  private sendRequestTransaction(user: User, value: number) {
    const { id } = user;

    this.subscriptions.add(
      this.cardHandlerService.cardsState$.subscribe((cards) => {
        const findedCard = cards.find((card) => card.selected);

        if (findedCard) {
          const cardInfos = findedCard;

          delete cardInfos.selected;
          delete cardInfos.valid;

          const payload: TransactionPayload = {
            ...cardInfos,
            value,
            destination_user_id: id,
          };

          this.subscriptions.add(
            this.transactionControllerService.send(payload).subscribe(
              () => {
                this.openSimpleMessageModal('success');
              },
              () => {
                this.openSimpleMessageModal('error');
              }
            )
          );
        }
      })
    );
  }

  openSimpleMessageModal(mode: 'success' | 'error'): void {
    const config = new MatDialogConfig();
    config.data = { title: 'Recibo de pagamento' }

    if (mode === 'success') {
      config.data.message = 'O pagamento foi concluido com sucesso.';
      config.data.allowHtmlMessage = false;

      this.dialog.open(SimpleMessageComponent, config);
    } else {
      config.data.message = 'O pagamento <b>não</b> foi concluido com sucesso.';
      config.data.allowHtmlMessage = true;

      this.dialog.open(SimpleMessageComponent, config);
    }
  }
}
