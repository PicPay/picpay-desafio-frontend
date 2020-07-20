import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SuccessDialogComponent } from 'src/app/components/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from 'src/app/components/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  constructor(
    private toastr: ToastrService,
    private modalService: BsModalService,
  ) {}

  showSuccessDialog(msg: string) {
    const initialState = {
      msg,
    } as Partial<SuccessDialogComponent>;
    this.modalService.show(SuccessDialogComponent, {
      class: 'modal-md modal-responsive modal-dialog-centered',
      ignoreBackdropClick: true,
      animated: false,
      initialState,
    });
  }

  showErrorDialog(msg: string) {
    const initialState = {
      msg,
    } as Partial<ErrorDialogComponent>;
    this.modalService.show(ErrorDialogComponent, {
      class: 'modal-md modal-responsive modal-dialog-centered',
      ignoreBackdropClick: true,
      animated: false,
      initialState,
    });
  }

  showSuccessToast(
    msg = 'Sua requisição foi efetivada com sucesso',
    title = 'Sucesso!',
  ) {
    this.toastr.success(msg, title);
  }

  showWarningToast(msg: string, title = 'Atenção!') {
    this.toastr.warning(msg, title);
  }

  showErrorToast(
    msg = 'Houve um problema com sua requisição. Tente novamente.',
    title = 'Ooops...',
  ) {
    this.toastr.error(msg, title);
  }
}
