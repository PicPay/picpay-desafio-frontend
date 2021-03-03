import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'loader',
  template: '<ngx-loading [show]="loading | async"></ngx-loading>'
})
export class LoaderComponent {

  constructor(private loaderService: LoaderService) { }

  public loading: Subject<boolean> = this.loaderService.isLoading;

}
