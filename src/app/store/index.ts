import { ActionReducerMap } from '@ngrx/store';
import { TodoListState } from './todo/todo.reducer';
import * as fromTodoListReducers from './todo/todo.reducer';


export interface State {
  todoList: TodoListState,
}

export const reducers: ActionReducerMap<State> = {
  todoList: fromTodoListReducers.todoReducer
};