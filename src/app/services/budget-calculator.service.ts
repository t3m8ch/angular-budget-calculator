import { RevenueModel } from '../models/revenue.model';
import { ExpenseModel } from '../models/expense.model';
import { BigNumber } from 'bignumber.js';

export function calculateBudget(revenues: RevenueModel[], expenses: ExpenseModel[]) {
  const revenuesSum =
    revenues.length > 0
      ? revenues.map((model) => model.amount).reduce((prev, curr) => prev.plus(curr))
      : new BigNumber('0');

  const expenseSum =
    expenses.length > 0
      ? expenses.map((model) => model.amount).reduce((prev, curr) => prev.plus(curr))
      : new BigNumber('0');

  return revenuesSum.minus(expenseSum);
}
