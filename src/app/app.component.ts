import { Component } from '@angular/core';
import{Guid} from 'guid-typescript';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-todo-app';
  filterText:string=''
}
