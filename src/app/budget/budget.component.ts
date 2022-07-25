import { Component, Input, OnInit } from '@angular/core';
import { RevenueModel } from '../models/revenue.model';
import { ExpenseModel } from '../models/expense.model';
import bignumber, { BigNumber } from 'bignumber.js';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
})
export class BudgetComponent implements OnInit {
  @Input() revenues: RevenueModel[] = [];
  @Input() expenses: ExpenseModel[] = [];

  constructor() {}

  ngOnInit(): void {}

  calculateBudget(): bignumber {
    const revenuesSum =
      this.revenues.length > 0
        ? this.revenues.map((model) => model.amount).reduce((prev, curr) => prev.plus(curr))
        : new BigNumber('0');

    const expenseSum =
      this.expenses.length > 0
        ? this.expenses.map((model) => model.amount).reduce((prev, curr) => prev.plus(curr))
        : new BigNumber('0');

    return revenuesSum.minus(expenseSum);
  }
}
