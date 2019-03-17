import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { ToggleTodoAction, EditarTodoAction, EliminarTodoAction } from '../todo.actions';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

    @Input() todo: Todo;
    @ViewChild('txtInputFisico') txtInputFisico: ElementRef;

    chkField: FormControl;
    txtInput: FormControl;
    editando: boolean;

    constructor(private store: Store<AppState>) { }

    ngOnInit() {
        this.chkField = new FormControl(this.todo.completado);
        this.txtInput = new FormControl(this.todo.texto, Validators.required);
        this.chkField.valueChanges.subscribe(() => {
            const action = new ToggleTodoAction(this.todo.id);
            this.store.dispatch(action);
        })
    }

    editar() {
        this.editando = true;
        setTimeout(() => {
            this.txtInputFisico.nativeElement.select();
        }, 100);
    }

    terminarEdicion() {
        this.editando = false;
        if (this.txtInput.invalid || this.txtInput.value === this.todo.texto)
            return;
        const action = new EditarTodoAction(this.todo.id, this.txtInput.value);
        this.store.dispatch(action);
    }

    borrarTodo() {
        const action = new EliminarTodoAction(this.todo.id);
        this.store.dispatch(action);
    }
}
