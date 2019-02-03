import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoListContainerComponent} from './todo-list-container.component';
import {MatDialogModule, MatTableModule} from '@angular/material';
import { StoreModule} from '@ngrx/store';
import {appReducers} from '../../../store/app/app.reducers';
import {TodoListComponent} from '../todo-list/todo-list.component';

describe('TodoListContainerComponent', () => {
  let component: TodoListContainerComponent;
  let fixture: ComponentFixture<TodoListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        MatDialogModule,
        StoreModule.forRoot(appReducers)
      ],
      declarations: [
        TodoListContainerComponent,
        TodoListComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
