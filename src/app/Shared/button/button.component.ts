import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: string;
  @Input() text: string;
  @Input() status: string;
  @Input() outline: boolean;
  @Input() disabled: boolean;
  @Output() clickBtn = new EventEmitter();

  
  constructor() { }

  ngOnInit() {
    this.type = this.type ? this.type : 'button';
    this.text = this.type ? this.text : 'Enviar';
    this.outline = this.outline ? this.outline : false;
    this.status = this.status ? this.status : '';
  }

  onBtnClick(){
    this.clickBtn.emit();
  }

}
