import { TranslateSwicherService } from '@core/services/translate-switcher/translate-switcher.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translate-switcher',
  templateUrl: './translate-switcher.component.html',
  styleUrls: ['./translate-switcher.component.scss']
})
export class TranslateSwitcherComponent implements OnInit {

  constructor(public translateService: TranslateSwicherService) { }

  ngOnInit(): void {
  }

}
