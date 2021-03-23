import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  lottieConfig: Object;
  @Input() showBackdrop = false;
  constructor() { 
    this.lottieConfig = {
      path: 'assets/json/cool_loading.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }

  ngOnInit() { }

}
