import { Action } from '@ngrx/store';
import { Row } from '../models/row.model';

export enum ActionTypes {
	ADD_ROW = 'ADD_ROW',
	DEL_ROW = 'DEL_ROW'
}

export class AddRow implements Action {
	readonly type = ActionTypes.ADD_ROW;
	constructor(public payload: Row) {}
}

export class DelRow implements Action {
	readonly type = ActionTypes.DEL_ROW;
	constructor(public payload: string) {}
}

export type Actions = AddRow | DelRow;
