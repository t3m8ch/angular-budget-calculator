import { Component } from '@angular/core';
import { RevenueModel } from './revenues-list/revenue.model';
import { ExpenseModel } from './expenses-list/expense.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  revenues: RevenueModel[] = [];
  expenses: ExpenseModel[] = [];
}
