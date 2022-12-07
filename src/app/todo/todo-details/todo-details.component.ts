import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from './../todo';
import { TodoService } from './../todo.service';
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  // @Output()viewEvent= new EventEmitter<Todo>();
 
  constructor(private route:ActivatedRoute, private todoService:TodoService) { }

  ngOnInit(): void {

   const myTitle= this.route.snapshot.params['title'];
  //  this.todoService.getId()
  //  console.log('function',this.todoService.getId(myTitle))
  
  }


}


