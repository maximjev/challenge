import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoListContainerComponent} from './components/todo-list-container/todo-list-container.component';
import {CommonModule} from '@angular/common';
import {TodoArchivedContainerComponent} from './components/todo-archived-container/todo-archived-container.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: TodoListContainerComponent,
    pathMatch: 'full'
  },
  {
    path: 'archived',
    component: TodoArchivedContainerComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TodoRoutingModule {}
