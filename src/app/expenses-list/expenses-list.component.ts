import { Component, Input, OnInit } from '@angular/core';
import { ExpenseModel } from './expense.model';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
})
export class ExpensesListComponent implements OnInit {
  @Input() expenses: ExpenseModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
