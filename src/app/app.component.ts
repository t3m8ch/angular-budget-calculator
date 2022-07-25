import { Component } from '@angular/core';
import { RevenueModel } from './revenues-list/revenue.model';
import { ExpenseModel } from './expenses-list/expense.model';

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
}
