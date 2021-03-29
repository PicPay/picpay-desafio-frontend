import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-paying-screen',
  templateUrl: './paying-screen.component.html',
  styleUrls: ['./paying-screen.component.scss'],
})
export class PayingScreenComponent implements OnInit {
  subs = new Subscription();
  userId: number;
  isDone = false;
  timer = 3;

  @Output() done = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.subs.add(
      this.router.routerState.root.firstChild.params.subscribe((params) => {
        this.userId = Number(params.id);
      })
    );
  }

  onDone(): void {
    this.router.navigate(['/users', this.userId]);
    this.done.emit(true);
  }
}
