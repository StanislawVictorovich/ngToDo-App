import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ToDo } from './todo';
import { TODO_URL } from './constants'

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http: HttpClient) { }

  private getToDos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(TODO_URL);
  }
  private getLastIndexElementOfCurrentPage(todos: ToDo[], currentPage: number): number {
    return todos.indexOf(this.getToDosByIndexPage(todos, currentPage)[this.getToDosByIndexPage(todos, currentPage).length - 1]);
  }

  private getToDosByIndexPage(todos: ToDo[], currentPage: number): ToDo[] {
    return todos.filter(todo => todo.userId === currentPage);
  }

  private getLastPageOfToDos(todos: ToDo[]): number {
    return todos[todos.length - 1].userId;
  }
}