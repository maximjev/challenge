import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {MatTableModule} from "@angular/material";
import {TodoListContainerComponent} from './components/todo-list-container/todo-list-container.component';

@NgModule({
  declarations: [TodoListComponent, TodoListContainerComponent],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class TodoModule { }
