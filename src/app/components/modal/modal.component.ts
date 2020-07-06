import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  enabled: boolean = false;
  @Input() title: string;

  constructor() {}

  ngOnInit() {}

  public show(id: number) {
    console.log('teste' + id);
    this.enabled = true;
  }
}
