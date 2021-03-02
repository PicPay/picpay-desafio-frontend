import { Transaction_Status } from '../../../../data/protocols/transaction-status.model'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {
  @Input()
  status: Transaction_Status

  @Output()
  hide = new EventEmitter<void>()

  constructor() {}

  ngOnInit() {}

  handlerHide() {
    this.hide.emit()
  }
}
