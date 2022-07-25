import { Component, Input, OnInit } from '@angular/core';
import { RevenueModel } from '../models/revenue.model';
import { ExpenseModel } from '../models/expense.model';
import bignumber from 'bignumber.js';
import { calculateBudget } from '../services/budget-calculator.service';

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
    return calculateBudget(this.revenues, this.expenses);
  }
}
