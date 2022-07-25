import { RevenueModel } from '../models/revenue.model';
import { BigNumber } from 'bignumber.js';
import { ExpenseModel } from '../models/expense.model';
import { calculateBudget } from './budget-calculator.service';

describe('calculateBudget', () => {
  const differenceBetweenRevenuesAndExpenses = 2000;
  let revenues: RevenueModel[];
  let expenses: ExpenseModel[];

  beforeEach(() => {
    revenues = [10000, 20000, 5000].map((amount) => {
      return new RevenueModel(`Revenue ${amount}`, new BigNumber(amount));
    });
    expenses = [10000, 20000, 5000 - differenceBetweenRevenuesAndExpenses].map((amount) => {
      return new ExpenseModel(`Expense ${amount}`, new BigNumber(amount));
    });
  });

  it('should calculate budget', () => {
    const budget = calculateBudget(revenues, expenses);
    expect(budget).toEqual(new BigNumber(differenceBetweenRevenuesAndExpenses));
  });
});
