import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pp-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() large: boolean = false
  @Input() small: boolean = false
  constructor() { }

  ngOnInit() {
  }


}
