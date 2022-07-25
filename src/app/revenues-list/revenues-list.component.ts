import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RevenueModel } from '../models/revenue.model';

@Component({
  selector: 'app-revenues-list',
  templateUrl: './revenues-list.component.html',
})
export class RevenuesListComponent implements OnInit {
  @Input() revenues: RevenueModel[] = [];
  @Output() addRevenue = new EventEmitter();
  @Output() deleteRevenue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
