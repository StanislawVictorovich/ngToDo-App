import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../todo';
import { ToDoService } from '../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() text: string;
  @Input() todos: ToDo[];
  @Input() currentPage: number;

  @Output() onChecked = new EventEmitter<number>();

  constructor(private toDoService: ToDoService) { }

  private deleteTask(item: ToDo): void {
    this.todos.splice(this.todos.indexOf(item), 1);
  }

  private checkTask(item: ToDo): void {
    this.onChecked.emit(this.todos.indexOf(item));
  }

  private get toDos(): ToDo[] {
    return this.toDoService.getToDosByIndexPage(this.todos, this.currentPage);
  }
}