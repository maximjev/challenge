import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';
import {TodoListContainerComponent} from './components/todo-list-container/todo-list-container.component';
import {TodoRoutingModule} from './todo-routing.module';
import { TodoArchivedContainerComponent } from './components/todo-archived-container/todo-archived-container.component';
import {TodoCreateModal} from './components/todo-create-modal/todo-create-modal';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [TodoListComponent, TodoListContainerComponent, TodoArchivedContainerComponent, TodoCreateModal],
  entryComponents: [TodoCreateModal],
  imports: [
    FormsModule,
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
