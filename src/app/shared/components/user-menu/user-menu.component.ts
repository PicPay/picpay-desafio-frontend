import { Component } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent {
  menuItems = [
    {
      icon: 'grid_view',
      text: 'Dashboard',
      routerLink: 'dashboard',
      title: 'Página Dashboard',
    },
    {
      icon: 'payments',
      text: 'Pagamentos',
      routerLink: 'payments',
      title: 'Página Pagamentos',
    },
    {
      icon: 'report',
      text: 'Notificações',
      routerLink: 'reports',
      title: 'Página Notificações',
    },
    {
      icon: 'miscellaneous_services',
      text: 'Serviços',
      routerLink: 'services',
      title: 'Página Serviços',
    },
  ];
}
