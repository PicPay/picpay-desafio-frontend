import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeaderContext } from '@contexts/shared/components/header/header-context.interface';
import { ThemeService } from '@core/services/theme/theme.service';
import { UserFilter } from '@shared/services/user/user.service';
import { Observable } from 'rxjs';
import { HEADER_VOCABULARY } from './header.component.vocabulary';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  vocabulary: HeaderContext = HEADER_VOCABULARY;

  userFilterEnum = UserFilter;

  isAlternateTheme$: Observable<boolean>;

  @Input() userFilter: UserFilter;

  @Input() userFilterKeys: string[];

  @Output() filter: EventEmitter<UserFilter> = new EventEmitter();

  constructor(public themeService: ThemeService) {}

  ngOnInit() {
    this.isAlternateTheme$ = this.themeService.isAlternateTheme();
  }

  filterUser(userFilter: UserFilter) {
    this.filter.emit(userFilter);
  }
}
