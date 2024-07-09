import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CsvService } from './services/csv.services';
import { AppComponent } from './app.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  // declarations: [ AppComponent ],
  providers: [ CsvService ],
  // bootstrap:    [ AppComponent ]
})
export class AppModule { }