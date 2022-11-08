import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import{NgForm}  from '@angular/forms';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Todo[]=[new Todo('Default-title','Default-body',new Date(),new Date(), false)
    
  ]
   completedTodos:Todo[]=[]
   currentDate:any=new Date()
   filterText:string=''
  constructor() { }

  ngOnInit(): void {
    
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
  const DoneTodos=localStorage.getItem('Complete')
  if (newTodos !== null){
    this.todos = JSON.parse(newTodos)
    console.log('new todo', newTodos)
  }
  if (DoneTodos !== null){
    this.completedTodos = JSON.parse(DoneTodos)
  }
  
}
  complete(todo:Todo){
    this.todos=this.todos.filter(item=>item.title!==todo.title)
    // localStorage.setItem('Todos',JSON.stringify(this.todos) )
    let currentTodo=this.todos.filter(item=>item.title===todo.title);
    this.completedTodos.push(todo)
    localStorage.setItem('Complete',JSON.stringify(this.completedTodos) )
    let index=this.todos.indexOf(todo);
    console.log('completed ',  this.completedTodos)
  }

  delete(todo:Todo){
    this.todos=this.todos.filter(item=>item.title!==todo.title)
    // localStorage.setItem('Todos',JSON.stringify(this.todos) )
      
  }
}
