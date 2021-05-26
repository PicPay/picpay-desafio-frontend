import { Injectable } from '@angular/core';
import { ModalComponent } from './../modal.component';

@Injectable()
export class ModalService {
	private modals: ModalComponent[] = []

	add(modal: ModalComponent): void {
		this.modals.push(modal);
	}

	remove(id: string): void {
		this.modals = this.modals.filter(modal => modal.id !== id)
	}

	open(id: string): void {
		this.openCloseModal(id, true);
	} 

	close(id: string): void {
		this.openCloseModal(id, false);
	} 

	private openCloseModal(id: string,  state: boolean) {	
		const modal = this.modals.find(modal => modal.id === id);
		if(!modal)  return;
		modal.openModal(state);
	}
}