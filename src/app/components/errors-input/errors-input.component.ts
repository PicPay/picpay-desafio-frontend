import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-errors-input',
  templateUrl: './errors-input.component.html',
  styleUrls: ['./errors-input.component.scss'],
})
export class ErrorsInputComponent implements OnInit, OnChanges {
  @Input() errors: any;
  errosTemp: any;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes) {
    const { currentValue } = changes.errors;
    this.errosTemp = currentValue;
  }
}
