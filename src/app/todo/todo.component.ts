import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import{NgForm}  from '@angular/forms';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Todo[]=[
    new Todo('title','body',new Date(),new Date(), false)
  ]
   completedTodos:Todo[]=[]
   currentDate:any=new Date()
  constructor() { }

  ngOnInit(): void {
    // localStorage.getItem('Complete')
     this.getAvailableTodos()

  }
  // getTodos:any= ""
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
  }
  if (DoneTodos !== null){
    this.completedTodos = JSON.parse(DoneTodos)
  }
  // console.log(item)
  // this.todos = item;
  // this.items = localStorage.getItem(JSON.parse('Todos'));
  // console.log(this.items);
  // this.todos = this.items;

    // if (localStorage.getItem(JSON.parse('Todos') ) != null)
    // {
      // this.todos=localStorage.getItem(JSON.parse('Todos')), 
      //  todos=JSON.parse(this.Todos)
    // } 
  //  
  //  console.log("storage is",this.todos)

  // this.getTodos=JSON.parse(localStorage.getItem('Todos'));
}
  complete(todo:Todo){
    this.todos=this.todos.filter(item=>item.title!==todo.title)
    localStorage.setItem('Todos',JSON.stringify(this.todos) )
    //  this.completedTodos.push(todo)
    let currentTodo=this.todos.filter(item=>item.title===todo.title);
    this.completedTodos.push(todo)
    localStorage.setItem('Complete',JSON.stringify(this.completedTodos) )
    let index=this.todos.indexOf(todo);
    // if (index>-1) {
    //   this.todos.splice(index,1)

    //  currentTodo[0].status=true
    // this.todos.pop()
    // console.log('staus is',  currentTodo[0].status)
    console.log('completed ',  this.completedTodos)
    
  }

  delete(todo:Todo){
    this.todos=this.todos.filter(item=>item.title!==todo.title)
     //  localStorage.getItem(this.currentTodo,)
    // let currentTodo=this.todos.filter(item=>item.title===title)[0];
    //  let index=this.todos.indexOf(todo);
    // if (index>-1) {
    //   this.todos.splice(index,1)
    //  
      
    // }
  }
}
