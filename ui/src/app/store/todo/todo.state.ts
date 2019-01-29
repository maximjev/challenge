import {Todo} from "../../todo/model/todo";

export interface TodoState {
  todos: Todo[];
  archivedTodos: Todo[];
}

export const initialTodoState: TodoState = {
  todos: null,
  archivedTodos: null
};
