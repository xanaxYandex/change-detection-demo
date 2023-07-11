import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from './app.component';
import {Level1Component} from './components/level1/level1.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [AppComponent ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    Level1Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
