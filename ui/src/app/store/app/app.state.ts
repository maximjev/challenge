import {initialTodoState, TodoState} from "../todo/todo.state";

export interface AppState {
  todos: TodoState;
}

export const initialAppState: AppState = {
  todos: initialTodoState
};

export function getInitialState(): AppState {
  return initialAppState;
}
