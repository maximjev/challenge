import {TestBed} from '@angular/core/testing';
import {TodoService} from '../../todo/service/todo.service';
import {TodoEffects} from './todo.effects';
import {Todo} from '../../todo/model/todo';
import {of, Subject} from 'rxjs';
import {ArchiveTodo, CreateTodo, LoadArchivedTodos, LoadTodos, SetArchivedTodos, SetTodos} from './todo.actions';
import {Store} from '@ngrx/store';
import {TestStore} from '../../test/test.store';
import {Actions} from '@ngrx/effects';


describe('TodoEffects', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [
      TodoEffects,
      {
        provide: TodoService,
        useValue: jasmine.createSpyObj('todoService', ['getAll', 'create', 'archive'])
      },
      {
        provide: Store,
        useClass: TestStore
      },
      {
        provide: Actions,
        useValue: new Subject()
      }
    ]
  }));

  let store$, todoEffects, todoService;
  beforeEach(() => {
    todoEffects = TestBed.get(TodoEffects);
    todoService = TestBed.get(TodoService);
    store$ = TestBed.get(Store);
  });

  it('should emit SetTodos action on load', () => {
    const expected: Todo[] = [
      {
        id: 1,
        description: 'description',
        archived: false,
        createdOn: new Date(1)
      }
    ];

    todoService.getAll.and.returnValue(of(expected));

    store$.dispatch(new LoadTodos());

    todoEffects.getTodos$.subscribe((result) => {
      expect(result).toEqual(new SetTodos(expected));
    });
  });

  it('should emit SetArchivedTodos action on load', () => {
    const expected: Todo[] = [
      {
        id: 1,
        description: 'description',
        archived: true,
        createdOn: new Date(1)
      }
    ];

    todoService.getAll.and.returnValue(of(expected));

    store$.dispatch(new LoadArchivedTodos());

    todoEffects.getArchivedTodos$.subscribe((result) => {
      expect(result).toEqual(new SetArchivedTodos(expected));
    });
  });

  it('should emit LoadTodos action on creation', () => {
    todoService.create.and.returnValue(of(null));

    store$.dispatch(new CreateTodo('description'));

    todoEffects.createTodo$.subscribe((result) => {
      expect(result).toEqual(new LoadTodos());
    });
  });

  it('should emit LoadTodos action on archive', () => {
    todoService.archive.and.returnValue(of(null));

    store$.dispatch(new ArchiveTodo(1));

    todoEffects.archiveTodo$.subscribe((result) => {
      expect(result).toEqual(new LoadTodos());
    });
  });
});
