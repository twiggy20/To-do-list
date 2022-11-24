import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import{NgForm}  from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  datePickerConfig!: Partial<BsDatepickerConfig>;
  todos:Todo[]=[new Todo('Default-title','Default-body',new Date(),new Date(), false)
    
  ]
   completedTodos:Todo[]=[]
   DoneTodos:any
   completeChecked!:boolean
   filterText:string=''
  constructor( ) {
    this.datePickerConfig=Object.assign({}, {containerClass:'theme-dark-blue',showWeekNumbers: false, minDate:new Date()});
   }

  ngOnInit(): void {
    // this.completedTodos
     this.getAvailableTodos()

  }

  add(form:NgForm){
    let todo=new Todo(form.value.title,form.value.body,new Date(),form.value.dueDate,false)
    if(form.value.title!=""){
      this.todos.push((todo));
      console.log(this.todos)
       localStorage.setItem('Todos',JSON.stringify(this.todos) )
    form.resetForm();
    
    }

  }
 
  
  
getAvailableTodos(){
  const newTodos = localStorage.getItem('Todos')
   this.DoneTodos=localStorage.getItem('Complete')
  if (newTodos !== null){
    this.todos = JSON.parse(newTodos)
    console.log('new todo', newTodos)
  }
  if (this.DoneTodos !== null){
    this.completedTodos = JSON.parse(this.DoneTodos)
  }
  
}
  complete(todo:Todo){
    this.todos=this.todos.filter(item=>item.title!==todo.title)
    this.delete(todo)
    // localStorage.setItem('Todos',JSON.stringify(this.todos) )
    let currentTodo=this.todos.filter(item=>item.title===todo.title)[0];
    this.completedTodos.push(todo)
    todo.status=true;
    this.completeChecked=true
    localStorage.setItem('Complete',JSON.stringify(this.completedTodos) )
    let index=this.todos.indexOf(todo);
    console.log('completed ',  this.completedTodos)
    console.log('todo ',  this.todos)
  }

  delete(todo:Todo){
    if (todo.status==false) {
      this.todos=this.todos.filter(item=>item.title!==todo.title)
       localStorage.setItem('Todos',JSON.stringify(this.todos) )
       console.log('delete from todo')
    }
    if(todo.status==true){ 
    this.completedTodos=this.completedTodos.filter(item=>item.title!==todo.title)
       localStorage.setItem('Complete',JSON.stringify(this.completedTodos) )
       console.log('delet from completed')
    }
  }
}
