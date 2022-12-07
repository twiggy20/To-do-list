import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './todo/todo.component';
import { SearchPipe } from './search.pipe';
import { TodoViewComponent } from './todo/todo-view/todo-view.component';
import { TodoDetailsComponent } from './todo/todo-details/todo-details.component';
import { TodoService } from './todo/todo.service';
import { CreateTodoComponent } from './todo/create-todo/create-todo.component';
@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent,
    TodoComponent,
    SearchPipe,
    TodoViewComponent,
    TodoDetailsComponent,
    CreateTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
