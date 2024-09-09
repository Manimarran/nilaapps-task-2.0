import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BaseChartDirective, provideCharts, withDefaultRegisterables  } from 'ng2-charts';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';


@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseChartDirective 
  ],
  providers: [provideCharts(withDefaultRegisterables())],
  bootstrap: [AppComponent]
})
export class AppModule { }
