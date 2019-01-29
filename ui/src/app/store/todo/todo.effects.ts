import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {TodoService} from "../../todo/service/todo.service";
import {
  ArchiveTodo,
  CreateTodo,
  LoadArchivedTodos,
  LoadTodos,
  SetArchivedTodos,
  SetTodos,
  TodoActions
} from "./todo.actions";
import {map, switchMap} from "rxjs/operators";
import {Todo} from "../../todo/model/todo";
import {of} from "rxjs";


@Injectable()
export class TodoEffects {

  constructor(
    private todoService: TodoService,
    private actions$: Actions
  ) {
  }

  @Effect()
  getTodos$ = this.actions$.pipe(
    ofType(TodoActions.LOAD_TODOS),
    switchMap(() => this.todoService.getAll(false)),
    switchMap((todos: Todo[]) => of(new SetTodos(todos)))
  );

  @Effect()
  getArchivedTodos$ = this.actions$.pipe(
    ofType(TodoActions.LOAD_ARCHIVED_TODOS),
    switchMap(() => this.todoService.getAll(true)),
    switchMap((todos: Todo[]) => of(new SetArchivedTodos(todos)))
  );

  @Effect()
  createTodo$ = this.actions$.pipe(
    ofType(TodoActions.CREATE_TODO),
    map((action: CreateTodo) => action.description),
    switchMap(description => this.todoService.create(description)),
    switchMap(() => of(new LoadTodos()))
  );

  @Effect()
  archiveTodo$ = this.actions$.pipe(
    ofType(TodoActions.ARCHIVE_TODO),
    map((action: ArchiveTodo) => action.id),
    switchMap(id => this.todoService.archive(id)),
    switchMap(() => of(new LoadTodos(), new LoadArchivedTodos()))
  );
}
