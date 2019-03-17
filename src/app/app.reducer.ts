import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from './todo/todo.reducer';
import * as fromFilter from './filter/filter.reducer';
import * as fromFilterActions from './filter/filter.actions';

export interface AppState {
    todos: Todo[];
    filter: fromFilterActions.filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filter: fromFilter.filtroReducer
};
