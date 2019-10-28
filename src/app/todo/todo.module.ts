import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoAddComponent } from './todo-add/todo-add.component';



@NgModule({
  declarations: [TodoComponent, TodoListComponent, TodoItemComponent, TodoFooterComponent, TodoAddComponent],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
