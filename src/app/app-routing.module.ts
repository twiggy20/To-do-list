import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStartedComponent } from './get-started/get-started.component';
import { CreateTodoComponent } from './todo/create-todo/create-todo.component';
import { TodoDetailsComponent } from './todo/todo-details/todo-details.component';
import { TodoComponent } from './todo/todo.component';
const routes: Routes = [
  {path:"",component:GetStartedComponent},
  {path:"todo",component:TodoComponent},
  {path:"create-todo",component:CreateTodoComponent},
  {path:"todo/:title",component:TodoDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
