import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-green-button',
  templateUrl: './primary-green-button.component.html',
  styleUrls: ['./primary-green-button.component.scss']
})
export class PrimaryGreenButtonComponent implements OnInit {
  @Input() label: string = "";
  constructor() { }

  ngOnInit() {
  }

}
