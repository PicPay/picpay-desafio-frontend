import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { IApi } from 'src/app/services/api/interfaces/api.interface';
import { ApiMockService } from 'src/app/services/api/api-mock.service';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss'],
})
export class UserRowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }

}
