import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ToDo } from './todo';
import { TODO_URL } from './constants'

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http: HttpClient) {}

  public getToDos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(TODO_URL);
  }
}