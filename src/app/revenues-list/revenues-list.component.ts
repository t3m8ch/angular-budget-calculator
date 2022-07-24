import { Component, Input, OnInit } from '@angular/core';
import { RevenueModel } from './revenue.model';

@Component({
  selector: 'app-revenues-list',
  templateUrl: './revenues-list.component.html',
})
export class RevenuesListComponent implements OnInit {
  @Input() revenues: RevenueModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
