import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoArchivedContainerComponent } from './todo-archived-container.component';

describe('TodoArchivedContainerComponent', () => {
  let component: TodoArchivedContainerComponent;
  let fixture: ComponentFixture<TodoArchivedContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoArchivedContainerComponent ]
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
