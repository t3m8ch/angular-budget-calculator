import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiButtonModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TuiInputModule, TuiInputNumberModule, TuiIslandModule, TuiMarkerIconModule } from '@taiga-ui/kit';
import { TuiCurrencyPipeModule, TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { RevenuesListComponent } from './revenues-list/revenues-list.component';
import { BudgetComponent } from './budget/budget.component';
import { ActivityItemComponent } from './activity-item/activity-item.component';
import { CreateRevenueDialogComponent } from './create-revenue-dialog/create-revenue-dialog.component';
import { CreateExpenseDialogComponent } from './create-expense-dialog/create-expense-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesListComponent,
    RevenuesListComponent,
    BudgetComponent,
    ActivityItemComponent,
    CreateRevenueDialogComponent,
    CreateExpenseDialogComponent,
  ],
  imports: [
    BrowserModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiIslandModule,
    TuiMoneyModule,
    TuiButtonModule,
    TuiDialogModule,
    TuiInputModule,
    TuiInputNumberModule,
    TuiCurrencyPipeModule,
    ReactiveFormsModule,
    TuiMarkerIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
