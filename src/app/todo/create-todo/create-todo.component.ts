import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  datePickerConfig!: Partial<BsDatepickerConfig>;
    todo:Todo={
    title:'',
    body:'',
    dateCreated:new Date(),
    // dueDate:,
    status:false
  }
  constructor(private todoService:TodoService,
    private router:Router
  ) { this.datePickerConfig=Object.assign({}, {containerClass:'theme-dark-blue',showWeekNumbers: false, minDate:new Date(), dateInputFormat:'DD/MM/YYYY'});}

  ngOnInit(): void {
  }
  add(todo:Todo){
    // console.log('todo',todo)
    if(todo.title!==''){ 
    const todos=this.todoService.addTodo(this.todo)
    localStorage.setItem('Todos',JSON.stringify(todos) )
    this.router.navigate(['todo'])
    //  form.resetForm();
     }
  }


}
