import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExpenseModel } from './expense.model';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
})
export class ExpensesListComponent implements OnInit {
  @Input() expenses: ExpenseModel[] = [];
  @Output() addExpense = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
