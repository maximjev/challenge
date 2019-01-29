import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../model/todo";
import {AppState} from "../../../store/app/app.state";
import {Store} from "@ngrx/store";
import {ArchiveTodo} from "../../../store/todo/todo.actions";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {

  COLUMN_DEF: string[] = ['description', 'createdOn', 'archive'];

  @Input() todos: Todo[];
  @Input() archived: boolean;

  constructor(private store$: Store<AppState>) {
  }

  ngOnInit() {
  }

  archive(id: number) {
    this.store$.dispatch(new ArchiveTodo(id));
  }
}
