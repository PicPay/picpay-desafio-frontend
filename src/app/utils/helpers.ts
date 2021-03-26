import { Injectable } from "@angular/core";

@Injectable()
export class Helper {
  constructor() {}

  checkExpirationDate(date) {
    const fullDate = this.convertToDate(date);
    const dateToCheck = {
      month: fullDate.getMonth(),
      year: fullDate.getFullYear(),
    };
    const currentDate = {
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    };

    if (dateToCheck.year > currentDate.year) {
      return true;
    } else if (dateToCheck.year === currentDate.year) {
      return dateToCheck.month >= currentDate.month;
    } else if (dateToCheck.year < currentDate.year) {
      return false;
    }
  }

  checkYear(year) {
    return Number(`20${year}`);
  }

  convertToDate(date) {
    if (date) {
      const parts = date.split("/");
      return new Date(this.checkYear(parts[1]), parts[0], 1);
    } else return new Date();
  }
}
