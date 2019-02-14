import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatesListComponent } from './rates-list/rates-list.component';

@NgModule({
  declarations: [RatesListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RatesListComponent
  ]
})
export class RateModule { }
