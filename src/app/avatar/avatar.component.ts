import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'picpay-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input()
  public url: string

  constructor() { }

  ngOnInit() {
    console.info(`url`,this.url)
  }

}
