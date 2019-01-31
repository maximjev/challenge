import {Component, OnInit} from '@angular/core';
import {AppState} from '../../../store/app/app.state';
import {select, Store} from '@ngrx/store';
import {Todo} from '../../model/todo';
import {CreateTodo, LoadTodos} from '../../../store/todo/todo.actions';
import {selectTodos} from '../../../store/todo/todo.selectors';
import {MatDialog} from '@angular/material';
import {TodoCreateModal} from '../todo-create-modal/todo-create-modal';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.sass']
})
export class TodoListContainerComponent implements OnInit {

  todos: Todo[];

  description: string;

  constructor(
    private store$: Store<AppState>,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.store$.dispatch(new LoadTodos());
    this.store$.pipe(select(selectTodos))
      .subscribe(data => this.todos = data);
  }

  openDialog() {
    const ref = this.dialog.open(TodoCreateModal, {
      width: '250px',
      data: { description: this.description }
    });

    ref.afterClosed().subscribe(result => this.store$.dispatch(new CreateTodo(result)));
  }
}
