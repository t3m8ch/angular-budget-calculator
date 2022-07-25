import { Component } from '@angular/core';
import { RevenueModel } from './models/revenue.model';
import { ExpenseModel } from './models/expense.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  createRevenueDialogIsOpen = false;
  createExpenseDialogIsOpen = false;
  revenues: RevenueModel[] = [];
  expenses: ExpenseModel[] = [];

  onAddRevenue() {
    this.createRevenueDialogIsOpen = true;
  }

  onAddExpense() {
    this.createExpenseDialogIsOpen = true;
  }

  addRevenue(revenue: RevenueModel) {
    this.revenues.push(revenue);
  }

  addExpense(expense: ExpenseModel) {
    this.expenses.push(expense);
  }

  onDeleteRevenue(revenueId: string) {
    this.revenues = this.revenues.filter((revenue) => revenue.id !== revenueId)
  }

  onDeleteExpense(expenseId: string) {
    this.expenses = this.expenses.filter((expense) => expense.id !== expenseId)
  }
}
