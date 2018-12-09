import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ 
    AppComponent, 
    NavigationComponent, 
    ListComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
