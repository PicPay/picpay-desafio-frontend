import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

	@Input() id = '';

	@Input() title = '';

	open: boolean = false;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
		this.modalService.add(this);
	}
	
	openModal(state: boolean): void {
		this.open = state;
	}

	ngOnDestroy(): void {
		this.modalService.remove(this.id);
	}
}
