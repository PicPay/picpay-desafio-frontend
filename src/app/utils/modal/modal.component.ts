import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {

  @Input() userPayment = [];
  @Input() viewModal = [];

  constructor() { }

  ngOnInit() {}

  ngOnChanges(){
    if (!this.userPayment) {
      return;
    }
  }

}
