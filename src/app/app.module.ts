import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RateModule} from './rate/rate.module';
import {RateService} from './rate/rate.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RateModule
  ],
  providers: [RateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
