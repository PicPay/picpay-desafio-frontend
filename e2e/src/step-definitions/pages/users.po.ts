import { $, ElementFinder, browser } from 'protractor';

export class UsersPage {
    listUsers: ElementFinder;
    btnUser: ElementFinder;

    constructor() {
        this.listUsers = $('#list-users0');
        this.btnUser = $('.app-user-button');
    }

    navigateTo() {
        return browser.get('/users');
    }
}