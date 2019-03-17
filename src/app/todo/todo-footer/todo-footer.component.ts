import { Component, OnInit } from '@angular/core';
import * as fromFilter from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../model/todo.model';
import * as fromTodo from '../todo.actions';

@Component({
    selector: 'app-todo-footer',
    templateUrl: './todo-footer.component.html',
    styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

    filtrosValidos: fromFilter.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
    filtroActual: fromFilter.filtrosValidos;
    pendientes: number;

    constructor(private store: Store<AppState>) { }

    ngOnInit() {
        this.store.subscribe(state => {
            this.contarPendientes(state.todos);
            this.filtroActual = state.filter;
        });
    }

    cambiarFiltro(nuevoFiltro: fromFilter.filtrosValidos) {
        const action = new fromFilter.SetFiltroAction(nuevoFiltro);
        this.store.dispatch(action);
    }

    contarPendientes(todos: Todo[]) {
        this.pendientes = todos.filter(todo => !todo.completado).length;
    }

    borrarTodo() {
        const action = new fromTodo.EliminarAllTodoAction();
        this.store.dispatch(action);
    }
}
