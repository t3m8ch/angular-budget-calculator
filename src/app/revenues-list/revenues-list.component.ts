import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RevenueModel } from './revenue.model';

@Component({
  selector: 'app-revenues-list',
  templateUrl: './revenues-list.component.html',
})
export class RevenuesListComponent implements OnInit {
  @Input() revenues: RevenueModel[] = [];
  @Output() addRevenue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
