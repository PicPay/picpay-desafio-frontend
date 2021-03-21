import { Component, Input, OnInit } from '@angular/core';

interface drop {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  @Input() arrayDrop: Array<drop>;

  constructor() { }

  ngOnInit() {
  }

}
