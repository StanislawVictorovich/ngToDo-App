import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Navigation } from './navigation/navigation.component';
import { List } from './list/list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: 
  [ 
    AppComponent, 
    HelloComponent, 
    Navigation, 
    List 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
