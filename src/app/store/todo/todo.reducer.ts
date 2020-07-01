import { Action, createReducer, on } from '@ngrx/store';
import * as todoActions from './todo.action';
import { TodoItem } from '../../interfaces/todo';

// TODO 
export interface TodoListState {
  items: TodoItem[];
}

export const initialState: TodoListState = { items: [] };

const todoListReducer = createReducer(
  initialState,
  on(
    todoActions.CREATE_TODO, 
    (state, act) => {
      console.log('state', state);
      return {
        ...state,
        items: state.items.concat(act.item)
      }
    }
  ),

  on(
    todoActions.MARK_TODO,
    (state, act) => {
      return {...state, items: checkTodo(state.items, act.id)}
    }
  ),

  on(
    todoActions.DELETE_TODO,
    (state, act) => {
      return {...state, items: removeTodo(state.items, act.id)}
    }
  )
)

const removeTodo = (list: TodoItem[], id: string): TodoItem[] => {
  return list.filter(el => el.id !== id);
}

const checkTodo = (list: TodoItem[], id: string): TodoItem[] => {
  for(const item of list) {
    if (item.id === id) {
      item.completed = !item.completed;
      break;
    }
  }

  return list;
}


export function todoReducer(state: TodoListState | undefined, action: Action) {
  return todoListReducer(state, action);
}