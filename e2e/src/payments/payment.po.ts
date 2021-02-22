import { browser, element, by } from 'protractor'
require('./waitReady.js')
var fs = require('fs')
export class UserListPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>
  }
  getUserInfo() {
    element.all(by.css('.users__id')).first().isDisplayed()
    browser.takeScreenshot().then(function (data) {
      var stream = fs.createWriteStream('./screenshots/user-list.png')
      stream.write(new Buffer(data, 'base64'))
      stream.end()
    })
  }
  // should be open payment modal
  getPaymentModal() {
    element.all(by.buttonText('Pagar')).first().click()
    browser.sleep(2000)
    element(by.className('payment')).isPresent()
    browser.takeScreenshot().then(function (data) {
      var stream = fs.createWriteStream('./screenshots/payment.png')
      stream.write(new Buffer(data, 'base64'))
      stream.end()
    })
  }
  //should be a input payment value
  getPaymentValue(value: number) {
    return element(by.css('input[formControlName="payment_value"]')).sendKeys(
      value,
    )
  }
  //should be a show feedback message
  messageValueZero() {
    element(by.css('input[formControlName="payment_value"]')).sendKeys(0)
    browser.sleep(2000)
    element(by.className('payment__feedback')).isDisplayed()
    browser.takeScreenshot().then(function (data) {
      var stream = fs.createWriteStream('./screenshots/feedback.png')
      stream.write(new Buffer(data, 'base64'))
      stream.end()
    })
  }
  //should be a show success modal
  paymentSuccess() {
    element(by.tagName('select')).element(by.tagName('option')).click()
    element(by.xpath('//select/option[.="Cartão com final 1111"]')).click()
    element(by.className('payment__btn')).click()
    browser.sleep(4000)
    browser.takeScreenshot().then(function (data) {
      var stream = fs.createWriteStream('./screenshots/payment-success.png')
      stream.write(new Buffer(data, 'base64'))
      stream.end()
    })
  }
  //should be a show error modal
  paymentFailed() {
    element(by.tagName('select')).element(by.tagName('option')).click()
    element(by.xpath('//select/option[.="Cartão com final 1234"]')).click()
    browser.sleep(2000)
    element(by.className('payment__btn')).click()
    browser.sleep(2000)
    browser.takeScreenshot().then(function (data) {
      var stream = fs.createWriteStream('./screenshots/payment-error.png')
      stream.write(new Buffer(data, 'base64'))
      stream.end()
    })
  }
  // should be a close modal
  close(closeItem: string) {
    browser.sleep(2000)
    element(by.className(closeItem)).click()
  }
}
