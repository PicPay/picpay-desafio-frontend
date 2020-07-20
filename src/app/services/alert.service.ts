import { Injectable } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private iziToast: Ng2IzitoastService) {}

  success = (
    msg: any = 'Sua ação foi concluída com sucesso',
    title: any = 'Sucesso',
    time = 3
  ) => {
    this.iziToast.success({
      title,
      message: msg,
      position: 'topCenter',
      timeout: 1000 * time,
      color: '#2ecc71',
    });
  }

  error = (
    msg: any = 'Ao realizar a operação',
    title: any = 'Erro',
    time = 3
  ) => {
    this.iziToast.success({
      title,
      message: msg,
      position: 'topCenter',
      timeout: 1000 * time,
      color: '#e74c3c',
    });
  }
}
