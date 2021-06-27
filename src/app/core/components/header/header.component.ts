import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const nightMode = document.querySelector('#night-mode') as HTMLInputElement;
    const nightModeStorage = localStorage.getItem('storageNightMode');

    if (nightModeStorage) {
      document.body.classList.add('night-mode');

      nightMode.checked = true;
    }

    nightMode.addEventListener('click', () => {
      nightMode
        ? document.body.classList.toggle('night-mode')
        : document.body.classList.toggle('light-mode');

      if (nightMode) {
        localStorage.setItem('storageNightMode', 'true');
        return;
      }
      localStorage.removeItem('storageNightMode');
    });
  }
}
