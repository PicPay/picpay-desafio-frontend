import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  isModalVisivel: boolean = false;
  titulo: string;

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
