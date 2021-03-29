import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  queryField = '';

  constructor() { }

  ngOnInit() {
    this.hideHeaderOnScroll();
  }

  onSearch() {
    const users = document.querySelectorAll('.user');
    users.forEach(user => {
      const userName = user.querySelector('.user__name').textContent;
      if (userName.toUpperCase().indexOf(this.queryField.toUpperCase()) > -1) {
          user.classList.remove('display-none');
      } else {
          user.classList.add('display-none');
      }
    });
  }

  hideHeaderOnScroll() {
    let lastScrollTop = 0;
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        header.style.top = '-5rem';
      } else {
        header.style.top = '0';
      }
      lastScrollTop = scrollTop;
    });
  }

}
