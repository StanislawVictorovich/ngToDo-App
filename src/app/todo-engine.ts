import { ToDo } from './todo';

export abstract class ToDoEngine {

  public getLastIndexElementOfCurrentPage(todos: ToDo[], currentPage: number): number{
    return todos.indexOf(this.getToDosByIndexPage(todos, currentPage)[this.getToDosByIndexPage(todos, currentPage).length - 1]);
  }
  
  public getToDosByIndexPage(todos: ToDo[], currentPage: number):ToDo[] {
    return todos.filter(todo => todo.userId === currentPage);
  }

  public getLastPageOfToDos(todos: ToDo[]): number {
    return todos[todos.length - 1].userId;
  }
}