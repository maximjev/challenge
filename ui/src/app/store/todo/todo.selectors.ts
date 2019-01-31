import {createSelector} from '@ngrx/store';
import {AppState} from '../app/app.state';
import {TodoState} from './todo.state';


export const selectTodoState = (state: AppState) => state.todos;

export const selectTodos = createSelector(
  selectTodoState,
  (state: TodoState) => state.todos
);

export const selectArchivedTodos = createSelector(
  selectTodoState,
  (state: TodoState) => state.archivedTodos
);

