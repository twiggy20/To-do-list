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

@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent,
    TodoComponent,
    SearchPipe,
    TodoViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
