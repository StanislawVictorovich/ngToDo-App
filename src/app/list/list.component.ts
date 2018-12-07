import { Component, OnInit, Input } from '@angular/core';
import { TODOS } from '../mock.todo';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.css' ]
})

export class List implements OnInit {
  @Input() text:string;
  TODOS_LIST = TODOS;
  constructor() { }
    
  ngOnInit() {
    
  }
  public deleteTask(i:number) { 
    TODOS.splice(i,1);
  }
}