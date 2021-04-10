import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  loading = { img: 'http://www.oftalmed.com.br/files/images/loading.gif' };

  constructor() { }

  ngOnInit() {
  }


  ngOnChanges() {}
}
