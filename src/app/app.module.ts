import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CsvService } from './services/csv.services';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  providers: [ CsvService ],
})
export class AppModule { }