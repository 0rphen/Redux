import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos } from 'src/app/filter/filter.actions';
import { Todo } from '../model/todo.model';


@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    todos: Todo[] = [];
    filter: filtrosValidos;

    constructor(private store: Store<AppState>) { }

    ngOnInit() {
        this.store.subscribe(state => {
            this.todos = state.todos;
            this.filter = state.filter;
        });
    }

}
