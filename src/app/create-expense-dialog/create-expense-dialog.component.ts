import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BigNumber } from 'bignumber.js';
import { ExpenseModel } from '../expenses-list/expense.model';

@Component({
  selector: 'app-create-expense-dialog',
  templateUrl: './create-expense-dialog.component.html',
})
export class CreateExpenseDialogComponent implements OnInit {
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();
  @Output() expenseCreated = new EventEmitter<ExpenseModel>();
  form = new FormGroup({
    title: new FormControl(),
    amount: new FormControl(),
  });

  constructor() { }

  ngOnInit(): void {
  }

  createExpense() {
    const expense = new ExpenseModel(
      this.form.controls['title'].value,
      new BigNumber(this.form.controls['amount'].value),
    );
    this.expenseCreated.emit(expense);
    this.open = false;
    this.openChange.emit(false);
    this.form.reset();
  }
}
