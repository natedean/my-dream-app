import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Rx';
import {Todo} from '../reducers/todos';


import {AppState} from '../services/state';


@Component({
  moduleId: module.id,
  selector: 'my-dream-app-app',
  templateUrl: 'my-dream-app.component.html',
  styleUrls: ['my-dream-app.component.css']
})
export class MyDreamAppAppComponent {
  title = 'Justin Graber likes Typescript.';

  constructor(private store:Store<AppState>) {
    store.subscribe(state => console.log(state));
    


    
  }

  addRandomTodo() {
      this.store.dispatch({
        type: 'ADD_TODO',
        payload: { text: 'Hello world' }
      });
  }



}
