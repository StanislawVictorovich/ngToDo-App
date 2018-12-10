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

  @Output() onNewPage = new EventEmitter<boolean>();
  @Output() onFowardPage = new EventEmitter<boolean>();
  @Output() onBackwardPage = new EventEmitter<boolean>();

  private data: ToDo[];

  constructor(private toDoService: ToDoService) { }

  private NewPage() {
    this.onNewPage.emit(true);
  }
  private ForwardPage() {
    this.onFowardPage.emit(true);
  }
  private BackPage() {
    this.onBackwardPage.emit(true);
  }
}