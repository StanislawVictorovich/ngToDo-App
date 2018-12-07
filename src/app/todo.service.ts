import { Injectable } from '@angular/core';

import { ToDo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  public TODOS:ToDo[] = [
  { todoText: 'go away', checked: true },
  { todoText: 'charge the smartphone', checked: false },
  { todoText: 'play ps', checked: false },
  { todoText: 'wash my dirty dog', checked: true},
  { todoText: 'congratulate my mother', checked: false }
  ]

  public deleteTask(i:number) { 
    this.TODOS.splice(i,1);
  }

  public add(text) {
    this.TODOS.push({
      todoText: text,
      checked: false
    });
  }
}