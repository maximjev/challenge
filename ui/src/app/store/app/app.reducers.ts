import {ActionReducerMap} from '@ngrx/store';
import {AppState} from './app.state';
import {todoReducer} from '../todo/todo.reducer';


export const appReducers: ActionReducerMap<AppState, any> = {
  todos: todoReducer
};
