import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiButtonModule, TuiRootModule } from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { RevenuesListComponent } from './revenues-list/revenues-list.component';
import { BudgetComponent } from './budget/budget.component';
import { ActivityItemComponent } from './activity-item/activity-item.component';

@NgModule({
  declarations: [AppComponent, ExpensesListComponent, RevenuesListComponent, BudgetComponent, ActivityItemComponent],
  imports: [BrowserModule, TuiRootModule, BrowserAnimationsModule, TuiIslandModule, TuiMoneyModule, TuiButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
