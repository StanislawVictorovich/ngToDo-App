import { Component, OnInit } from '@angular/core';
import { ToDoService } from './todo.service';
import { ToDo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public newToDoText: string;
  public currentPage: number;
  public todos: ToDo[];

  constructor(private toDoService: ToDoService) {
    this.currentPage = 1;
  }

  ngOnInit() {
    this.toDoService.getToDos().subscribe(todos => {
      this.todos = todos;
    });
  }

  public onChecked(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  public onNewPage() {
    this.currentPage = this.toDoService.getLastPageOfToDos(this.todos) + 1;
  }

  public onFowardPage() {
    this.currentPage += 1;
  }

  public onBackwardPage() {
    this.currentPage -= 1;
  }

  public addTask() {
    const item: ToDo = {
      title: this.newToDoText,
      completed: false,
      id: this.toDoService.getLastIndexElementOfCurrentPage(this.todos, this.currentPage) + 1,
      userId: this.currentPage
    };
    let newPosition: number = this.toDoService.getLastIndexElementOfCurrentPage(this.todos, this.currentPage);
    if (!newPosition) {
      newPosition = this.toDoService.getLastIndexElementOfCurrentPage(this.todos, this.currentPage - 1);
    }
    this.todos.splice(newPosition + 1, 0, item);
  }
}
