import { Component, OnInit } from '@angular/core';
import {Todo} from '../../model/todo';
import {AppState} from '../../../store/app/app.state';
import {select, Store} from '@ngrx/store';
import {LoadArchivedTodos} from '../../../store/todo/todo.actions';
import {selectArchivedTodos} from '../../../store/todo/todo.selectors';

@Component({
  selector: 'app-todo-archived-container',
  templateUrl: './todo-archived-container.component.html',
  styleUrls: ['./todo-archived-container.component.sass']
})
export class TodoArchivedContainerComponent implements OnInit {

  todos: Todo[];

  constructor(private store$: Store<AppState>) { }

  ngOnInit() {
    this.store$.dispatch(new LoadArchivedTodos());
    this.store$.pipe(select(selectArchivedTodos))
      .subscribe(data => this.todos = data);
  }

}
