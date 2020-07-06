import { browser, element, by } from 'protractor';
import { Given, Then, When, Before, setDefaultTimeout } from 'cucumber';
import { expect } from './../config/chai-imports';
import { UsersPage } from './pages/users.po';

const usersPage: UsersPage = new UsersPage();

setDefaultTimeout(browser.defaultTimeout);

Before(() => {
    browser.manage().window().maximize();
});

Given('que estou na página inicial {string}', { timeout: browser.pageLoadingTimeout }, async (text) => {
    await usersPage.navigateTo();
    await expect(await browser.getTitle()).to.equal(text);
});

When('devo Visualizar uma lista de usuários', { timeout: browser.pageLoadingTimeout }, async () => {
    await browser.sleep(1000);
});

Then('devo clicar no primeiro item da lista', { timeout: browser.pageLoadingTimeout }, async () => {
    await browser.actions().mouseMove(usersPage.listUsers).perform().then(() => {
        usersPage.listUsers.element(by.css('.app-user-button')).click();
    });

    await browser.sleep(1000);
});
