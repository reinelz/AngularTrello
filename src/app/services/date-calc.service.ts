import { Injectable } from '@angular/core';
import moment = require('moment');

@Injectable()
export class DateCalcService {

  constructor() { }

  getTimeDiff(date): number {
    date = moment(date, 'YYYYMMDD');
    const today = moment(moment(), 'YYYYMMDD');

    const timediff = today.diff(date, 'days');

    return timediff;
  }

}
