import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {
  
  constructor(
    private _modalService: ModalService
  ) { }

  ngOnInit() {
    this._modalService.getActiveModal$()
  }
}
