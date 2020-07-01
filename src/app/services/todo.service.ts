import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Subject } from 'rxjs';
import { TodoItem } from '../interfaces/todo';
import { Store } from '@ngrx/store';
import { State } from '../store';
import * as todoSelectors from '../store/todo/selectors';

@Injectable()
export class TodoService {
  private todoListSubject: Subject<TodoItem[]> = new Subject<TodoItem[]>();
  
  constructor(
    private store: Store<State>
  ) {
    this.retrieveListFromStore();
  }

  retrieveListFromStore() {
    this.store.select(todoSelectors.getTodoItems)
      .subscribe(
        value => this.todoListSubject.next(value)
      );
  }

  getTodoList() {
    return this.todoListSubject.asObservable();
  }

  addItem() {
    this.retrieveListFromStore();
  }

}