import { createAction, props } from '@ngrx/store';
import { TodoItem } from '../../interfaces/todo';

export const CREATE_TODO = createAction('CREATE_TODO', props<{item: TodoItem}>());
export const MARK_TODO = createAction('MARK_TODO', props<{id: string}>());
export const EDIT_TODO = createAction('EDIT_TODO');
export const DELETE_TODO = createAction('DELETE_TODO', props<{id: string}>());