import { initialState, reducer } from './reducer';
import { AppState } from '../models/app-state.model';
import * as Action from '../actions/actions';
import { Row } from '../models/row.model';

describe('AppReducer', () => {
	describe('validate intial state when the action is invalid', () => {
		it('should return the same state in both options', () => {
			expect(reducer(undefined, {} as any)).toEqual(initialState);
			const someState: AppState = {
				rows: [ { id: '3', items: [ 'test4' ] } ]
			};
			expect(reducer(someState, {} as any)).toBe(someState);
		});
	});

	describe('validate that a new row is added when the action add is executed', () => {
		it('Add new Row', () => {
			let action;
			const row: Row = { id: '1', items: [ 'item2', 'item3' ] };
			action = new Action.AddRow(row);
			reducer(initialState, action);
			expect(initialState.rows.length).toEqual(0);
		});
	});

	describe('Validate that reducer delete a row', () => {
		it('Delete Row', () => {
			const currentState: AppState = {
				rows: [ { id: 'id-1', items: [ 'test4' ] } ]
			};
			let action;
			action = new Action.DelRow('id-1');
			expect(reducer(currentState, action)).toEqual({
				rows: []
			});
		});

		it('Delete Row with a invalid ID', () => {
			const currentState: AppState = {
				rows: [ { id: 'id-1', items: [ 'test4' ] } ]
			};
			let action;
			action = new Action.DelRow('id-2');
			expect(reducer(currentState, action)).toEqual(currentState);
		});
	});
});
