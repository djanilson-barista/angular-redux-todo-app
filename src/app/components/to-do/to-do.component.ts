import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {v4 as uuid} from 'uuid';

import {TodoItem} from '../../interfaces/todo';
import * as todoAct from '../../store/todo/todo.action';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  todoList: Observable<TodoItem[]>;
  title = '';

  constructor(
    private _store: Store<{ todo: any }>,
    private _todoListService: TodoService,
  ) {
  }

  ngOnInit() {
    this.todoList = this._todoListService.getTodoList();
  }

  addItem() {
    const title = this.title;
    this._store.dispatch(todoAct.CREATE_TODO(
      {
        item: {
          id: uuid(),
          title,
          completed: false
        }
      }
    ));
    this.title = '';
    // this.todoListService.addItem({title});
  }

  markItem(item: TodoItem) {
    console.log('item', item);
  }

  removeItem(item) {
    this._store.dispatch(todoAct.DELETE_TODO({id: item.id}));
    // this.todoListService.deleteItem(item);
  }
}
