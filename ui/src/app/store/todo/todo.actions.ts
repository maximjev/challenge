import {Action} from "@ngrx/store";
import {Todo} from "../../todo/model/todo";

export enum TodoActions {
  REFRESH_TODOS = '[Todos] REFRESH_TODOS',
  LOAD_TODOS = '[Todos] LOAD_TODOS',
  SET_TODOS = '[Todos] SET_TODOS',
  LOAD_ARCHIVED_TODOS = '[Todos] LOAD_ARCHIVED_TODOS',
  SET_ARCHIVED_TODOS = '[Todos] SET_ARCHIVED_TODOS',
  CREATE_TODO = '[Todos] CREATE_TODO',
  ARCHIVE_TODO = '[Todos] ARCHIVE_TODO'
}

export class RefreshTodos implements Action {
  public readonly type = TodoActions.REFRESH_TODOS;
}

export class LoadTodos implements Action {
  public readonly type = TodoActions.LOAD_TODOS;
}

export class SetTodos implements Action {
  public readonly type = TodoActions.SET_TODOS;

  constructor(public payload: Todo[]) {}
}

export class LoadArchivedTodos implements Action {
  public readonly type = TodoActions.LOAD_ARCHIVED_TODOS;
}

export class SetArchivedTodos implements Action {
  public readonly type = TodoActions.SET_ARCHIVED_TODOS;

  constructor(public payload: Todo[]) {}
}

export class CreateTodo implements Action {
  public readonly type = TodoActions.CREATE_TODO;

  constructor(public description: string) {}
}

export class ArchiveTodo implements Action {
  public readonly type = TodoActions.ARCHIVE_TODO;

  constructor(public id: number) {}
}

export type TodoAction =
  RefreshTodos |
  LoadTodos |
  SetTodos |
  LoadArchivedTodos |
  SetArchivedTodos |
  CreateTodo |
  ArchiveTodo;
