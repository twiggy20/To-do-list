import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo/todo';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(todos: Todo[], filterText:string ) {
    
    if (todos.length==0|| filterText=='') {
       return todos;
       
    }
      return todos.filter(todo=>
      todo.title.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()));
        
    }
  
  
  

}


