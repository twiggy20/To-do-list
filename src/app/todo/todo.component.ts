import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from './todo';
import{NgForm}  from '@angular/forms';
import{Guid} from 'guid-typescript';
// import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Router } from '@angular/router';
import { TodoService } from './todo.service';
import { BehaviorSubject, Observable } from 'rxjs';
import {of} from 'rxjs';
import { switchMap } from 'rxjs/operators';
// import 'rxjs/add/observable/of';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
//  OnInit{
  todos$!: Observable<Todo[]>;
//  }
  todos:Todo[]=[]
  // ObsTodo!: BehaviorSubject<Todo>
  // datePickerConfig!: Partial<BsDatepickerConfig>;
   completedTodos:Todo[]=[]
   currentDate:any=new Date()
   filterText:string=''
  constructor(private router:Router ,
    private todoService:TodoService) {
    // this.datePickerConfig=Object.assign({}, {containerClass:'theme-dark-blue',showWeekNumbers: false, minDate:new Date(), dateInputFormat:'DD/MM/YYYY'});
   }

  ngOnInit() {
    // this.completedTodos
    // this.ObsTodo= new BehaviorSubject<Todo>(new Todo('My-title','Default-body',new Date(),new Date(), false)  )
  //  console.log(this.todos)
  //  console.log(this.ObsTodo)
  this.todos=this.todoService.getTodos()
  }
  getAvailableTodos(){
      const newTodos = localStorage.getItem('Todos')
      const DoneTodos=localStorage.getItem('Complete')
      if (newTodos !== null){
        // this.todos.subscribe(todoList=>this.todos=todoList)
        this.todos = JSON.parse(newTodos)
        // console.log('new todo', newTodos)
    
      }
      if (DoneTodos !== null){
        this.completedTodos = JSON.parse(DoneTodos)
      }

    
     
    } 
      
    
    delete(todo:Todo){
      console.log('todo status:', todo.status)
      if (todo.status==false) {
        this.todos=this.todos.filter(item=>item.title!==todo.title)
        //  localStorage.setItem('Todos',JSON.stringify(this.todos) )
         console.log('delete from todo')
      }
      if(todo.status==true){ 
      this.completedTodos=this.completedTodos.filter(item=>item.title!==todo.title)
        //  localStorage.setItem('Complete',JSON.stringify(this.completedTodos) )
         console.log('delet from completed')
      }
    }
    
  complete(todo:Todo){
    this.todos=this.todos.filter(item=>item.title!==todo.title)
    // localStorage.setItem('Todos',JSON.stringify(this.todos) )
    // let currentTodo=this.todos.filter(item=>item.title===todo.title);
    todo.status=true
    console.log('status', todo.status)
    this.completedTodos.push(todo)
    // localStorage.setItem('Complete',JSON.stringify(this.completedTodos) )
    let index=this.todos.indexOf(todo);
    console.log('completed ',  this.completedTodos)
  }
  
   
  // add(form:NgForm){
  //   let todo=new Todo(form.value.title,form.value.body,new Date(),form.value.dueDate,false)
  //   if(form.value.title!=""){
  //     this.todos.push((todo));
      
      // this.ObsTodo.next(todo)
      // console.log(this.ObsTodo)
     
    //  this.ObsTodo = from(this.todos).pipe(
      // don't need `mergeMap`
      // map(item => of(item).pipe(delay(3000))),
      // concatMap(item$ => item$),
      // tap((item: number) => {return(item)})
    // );
      // localStorage.setItem('Todos',JSON.stringify(this.todos) )
      // form.resetForm();
    // }
    // console.log('of', this.todos)
    
  
  // }
  onClick(title:string){
    this.router.navigate(['/todo',title])
  }
  // getTodo(){
  //   return this.ObsTodo.asObservable
  // }
  // setTodo(todo:Todo){
  //   this.ObsTodo.next(todo)
  // }
}
