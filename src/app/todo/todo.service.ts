import { Injectable } from "@angular/core";
import { Todo } from './todo';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TodoService{
  private todo$=new BehaviorSubject<Todo[]>([])
 readonly myTodo$=this.todo$.asObservable()
    private todos:Todo[]=[new Todo('Default-title','Default-body',new Date(), false,new Date(),)  ]
getTodos():Todo[]{
  return this.todos
}
addTodo(todo:Todo){
   this.todos.push(todo)
   
  this.todo$.next(Object.assign([],this.todos))
  console.log('todos',this.todo$)
}
getTodoTitle(title:string):any{
  console.log('got this',this.todos.find(item=>item.title===title))
  return this.todos.find(item=>item.title===title);
  
}

}

