import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { IApi } from 'src/app/services/api/interfaces/api.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{ provide: IApi, useClass: ApiService },]
})
export class HomeComponent implements OnInit {

  constructor(private api:IApi) { }

  ngOnInit() {
    this.api.getUsers().subscribe((val) => console.log(val))
  }

}
