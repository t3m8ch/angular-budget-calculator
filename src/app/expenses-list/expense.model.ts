import bignumber from 'bignumber.js';

export class ExpenseModel {
  constructor(public title: string, public amount: bignumber) {
  }
}
