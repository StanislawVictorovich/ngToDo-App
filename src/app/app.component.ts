import { Component, OnInit } from '@angular/core';
import { ToDoService } from './todo.service';
import { ToDo } from './todo';
import { ToDoEngine } from './todo-engine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent extends ToDoEngine implements OnInit{
  
  public newToDoText: string;
  public currentPage: number;
  public todos: ToDo[];

  constructor(private toDoService: ToDoService){
    super();
    this.currentPage = 1;
  }

  ngOnInit() {
    this.toDoService.getToDos().subscribe(todos => this.todos = todos);
  }

  public onChecked(index: number){
    this.todos[index].completed = !this.todos[index].completed;console.log(this.todos);
  }
  
  public onNewPage(){
    this.currentPage = this.getLastPageOfToDos(this.todos) + 1;
  }
  
  public onFowardPage(){
    this.currentPage++;
  }
  
  public onBackwardPage(){
    this.currentPage--;
  }
  
  public addTask(){
    const item: ToDo = new ToDo;
    let newPosition: number;
    item.title = this.newToDoText;
    item.completed = false;
    item.id = this.getLastIndexElementOfCurrentPage(this.todos, this.currentPage) + 1;
    item.userId = this.currentPage;alert(this.getLastIndexElementOfCurrentPage(this.todos, this.currentPage) + 1);
    newPosition = this.getLastIndexElementOfCurrentPage(this.todos, this.currentPage) + 1;
    if (!newPosition) {
      newPosition = this.getLastIndexElementOfCurrentPage(this.todos, this.currentPage - 1) + 1;
    }
    this.todos.splice(newPosition, 0, item);
  }
}
