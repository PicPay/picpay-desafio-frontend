import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-picture',
  templateUrl: './user-picture.component.html',
  styleUrls: ['./user-picture.component.scss']
})
export class UserPictureComponent implements OnInit {

  @Input() image: string;
  constructor() { }

  ngOnInit() {
  }

}
