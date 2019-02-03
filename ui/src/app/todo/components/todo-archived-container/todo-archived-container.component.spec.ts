import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoArchivedContainerComponent} from './todo-archived-container.component';
import {TodoListComponent} from '../todo-list/todo-list.component';
import {MatTableModule} from '@angular/material';
import {StoreModule} from '@ngrx/store';
import {appReducers} from '../../../store/app/app.reducers';

describe('TodoArchivedContainerComponent', () => {
  let component: TodoArchivedContainerComponent;
  let fixture: ComponentFixture<TodoArchivedContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        StoreModule.forRoot(appReducers)
      ],
      declarations: [
        TodoArchivedContainerComponent,
        TodoListComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoArchivedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
