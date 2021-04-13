import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonName: string;
  @Input() buttonType: string;
  constructor() { }

  ngOnInit() {
  }

}
