import { createSelector } from '@ngrx/store';
import { TodoListState } from './todo.reducer';
import { State } from '../index';

export const getAllTodos = (state: State) => {
  console.log(state.todoList);
  return state.todoList;
};

export const getTodoItems = createSelector(
  getAllTodos,
  (state: TodoListState) => state.items
);