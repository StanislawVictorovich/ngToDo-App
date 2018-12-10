import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDoService } from '../todo.service';
import { ToDo } from '../todo';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  @Input() todos: ToDo[];
  @Input() currentPage: number;

  @Output() onNewPage = new EventEmitter();
  @Output() onFowardPage = new EventEmitter();
  @Output() onBackwardPage = new EventEmitter();

  constructor(private toDoService: ToDoService) { }

  private get lastPage(): number {
    return this.toDoService.getLastPageOfToDos(this.todos);
  }

  private NewPage(): void {
    this.onNewPage.emit();
  }
  private ForwardPage(): void {
    this.onFowardPage.emit();
  }
  private BackPage(): void {
    this.onBackwardPage.emit();
  }
}