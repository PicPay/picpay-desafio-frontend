import { UserFilter } from '@shared/services/user/user.service';
import { APP_VOCABULARY } from 'src/app/app.component.vocabulary';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '@core/services/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  vocabulary = APP_VOCABULARY;

  userFilterEnum = UserFilter;

  isAlternateTheme$: Observable<boolean>;

  @Input() userFilter: UserFilter;

  @Input() userFilterKeys: string[];

  @Output() filter: EventEmitter<UserFilter> = new EventEmitter();

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isAlternateTheme$ = this.themeService.isAlternateTheme();
  }

  changeTheme() {
    this.themeService.changeTheme();
  }

  filterUser(userFilter: UserFilter) {
    this.filter.emit(userFilter);
  }
}
