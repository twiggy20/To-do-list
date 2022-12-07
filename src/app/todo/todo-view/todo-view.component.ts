import { outputAst } from '@angular/compiler';
import { Component, Input, Output,OnInit, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import { Router } from '@angular/router';
import { TodoService } from './../todo.service';
@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {

  @Input()completed:Todo[]=[]
   @Output()deleteEvent= new EventEmitter<Todo>();
 
  constructor(private router:Router, ) { }

  ngOnInit(): void {
  }
 delete(todo:Todo){
  this.deleteEvent.emit(todo);
 }
 onClick(title:string){
  this.router.navigate(['todo',title])
}

}
