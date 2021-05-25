import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
	template: `
		<button [disabled]="disabled" class="custom-button">
				<ng-content></ng-content>
		</button>
	`,
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent  {
	@Input() disabled = false;

}
