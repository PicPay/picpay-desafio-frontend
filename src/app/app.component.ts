import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public users: User[] = [{
    id: 1001,
    img: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Eduardo Santos",
    username: "@eduardo.santos"
  },
  {
    id: 1002,
    img: "https://randomuser.me/api/portraits/women/37.jpg",
    name: "Maria Coelho",
    username: "@maria.coelho"
  },
  {
    id: 1001,
    img: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Eduardo Santos",
    username: "@eduardo.santos"
  },
  {
    id: 1002,
    img: "https://randomuser.me/api/portraits/women/37.jpg",
    name: "Maria Coelho",
    username: "@maria.coelho"
  }]
}
