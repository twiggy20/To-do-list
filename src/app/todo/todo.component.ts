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
   currentDate:any=new Date()
  constructor() { }

  ngOnInit(): void {
     this.getAllTodos()
  }
  getTodos:any= ""
  add(form:NgForm){
    let todo=new Todo(form.value.title,form.value.body,new Date(),form.value.dueDate,false)
    if(form.value.title!=""){
      this.todos.push((todo));
      console.log(this.todos)
      localStorage.setItem('Todos',JSON.stringify(this.todos) )
    form.resetForm();
    
    }

  }
getAllTodos(){
  const items = localStorage.getItem('Todos')
  if (items !== null){
    this.todos = JSON.parse(items)
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
  status(title:string){
    let currentTodo=this.todos.filter(item=>item.title===title);
    // currentTodo[0].status=true
    console.log('staus is',  currentTodo[0].status=true)

  }

  delete(title:string){
    let currentTodo=this.todos.filter(item=>item.title===title)[0];
    let index=this.todos.indexOf(currentTodo,0);
    if (index>-1) {
      this.todos.splice(index,1)
      //  localStorage.getItem(this.currentTodo,)
      
    }
  }
}
