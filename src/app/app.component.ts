import { Component } from '@angular/core';
import { TODOS } from './mock.todo';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  public text: string;
  public add() {
    TODOS.push({
      todoText: this.text,
      checked: false
    });
  }
}
