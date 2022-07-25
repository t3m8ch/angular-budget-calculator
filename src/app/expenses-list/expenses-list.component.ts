import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExpenseModel } from '../models/expense.model';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
})
export class ExpensesListComponent implements OnInit {
  @Input() expenses: ExpenseModel[] = [];
  @Output() addExpense = new EventEmitter();
  @Output() deleteExpense = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
