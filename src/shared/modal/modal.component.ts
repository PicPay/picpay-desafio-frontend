import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() titulo: string;
  isModalVisivel: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isModalVisivel = !this.isModalVisivel;
  }

  close() {
    this.isModalVisivel = false;
  }

}
