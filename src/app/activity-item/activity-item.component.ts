import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
})
export class ActivityItemComponent implements OnInit {
  @Input() title!: string;
  @Input() amount!: number;

  constructor() {
  }

  ngOnInit(): void {
    if (this.title === undefined) {
      throw Error('this.title is undefined');
    }

    if (this.amount === undefined) {
      throw Error('this.amount is undefined');
    }
  }
}
