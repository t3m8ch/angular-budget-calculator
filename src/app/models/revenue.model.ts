import bignumber from 'bignumber.js';
import { v4 as uuidv4 } from 'uuid';

export class RevenueModel {
  public id: string = uuidv4();

  constructor(public title: string, public amount: bignumber) {
  }
}
