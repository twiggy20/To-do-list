import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStartedComponent } from './get-started/get-started.component';
import { TodoComponent } from './todo/todo.component';
const routes: Routes = [
  {path:"",component:GetStartedComponent},
  {path:"todo",component:TodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
