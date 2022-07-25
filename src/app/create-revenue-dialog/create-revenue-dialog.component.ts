import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RevenueModel } from '../revenues-list/revenue.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BigNumber } from 'bignumber.js';
import { _thereAreNoWhiteSpace } from '../validators/white-space.validator';

@Component({
  selector: 'app-create-revenue-dialog',
  templateUrl: './create-revenue-dialog.component.html',
})
export class CreateRevenueDialogComponent implements OnInit {
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();
  @Output() revenueCreated = new EventEmitter<RevenueModel>();
  form = new FormGroup({
    title: new FormControl(null, [Validators.required, _thereAreNoWhiteSpace]),
    amount: new FormControl(null, [Validators.required, _thereAreNoWhiteSpace]),
  });

  constructor() {}

  ngOnInit(): void {}

  createRevenue() {
    const revenue = new RevenueModel(
      this.form.controls['title'].value,
      new BigNumber(this.form.controls['amount'].value),
    );
    this.revenueCreated.emit(revenue);
    this.open = false;
    this.openChange.emit(false);
    this.form.reset();
  }
}
