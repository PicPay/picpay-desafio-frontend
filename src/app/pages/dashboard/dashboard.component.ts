import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/entities/user.model';
import { UserControllerService } from '../controllers/user-controller/user-controller.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private userControllerService: UserControllerService) { }

  ngOnInit() {
    this.users$ = this.userControllerService.getAll();
  }

}
