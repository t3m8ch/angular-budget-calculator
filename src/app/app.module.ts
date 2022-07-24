import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiButtonModule, TuiRootModule } from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TuiRootModule, BrowserAnimationsModule, TuiIslandModule, TuiMoneyModule, TuiButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
