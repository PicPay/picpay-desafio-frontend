import { $, ElementFinder } from 'protractor';

export class PaymentPage {
    dialogAlertTitle: ElementFinder;
    dialogAlertDescription: ElementFinder;
    dialogAlertButton: ElementFinder;
    title: ElementFinder;
    btnPay: ElementFinder;
    fieldValue: ElementFinder;
    fieldCard: ElementFinder;
    selectPanel: ElementFinder;

    constructor() {
        this.dialogAlertTitle = $('.app-dialog-panel-alert .app-dialog-title');
        this.dialogAlertDescription = $('.app-dialog-panel-alert .app-dialog-description');
        this.dialogAlertButton = $('.app-dialog-panel-alert .app-dialog-content .app-btn');
        this.title = $('.app-dialog .app-dialog-toolbar .app-dialog-title');
        this.btnPay = $('app-payment .app-btn');
        this.fieldValue = $('app-payment #value');
        this.fieldCard = $('app-payment #card');
        this.selectPanel = $('.mat-select-panel');
    }
}
