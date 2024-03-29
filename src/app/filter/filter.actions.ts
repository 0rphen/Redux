import { Action } from '@ngrx/store';

export const SET_FILTRO = '[filter] Set filtro';
export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export class SetFiltroAction implements Action {
    readonly type = SET_FILTRO;
    constructor(public filtro: filtrosValidos) { }
}

export type acciones = SetFiltroAction;
