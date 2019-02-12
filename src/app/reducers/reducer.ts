import { AppState } from '../models/app-state.model';
import { Actions, ActionTypes } from '../actions/actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export let initialState: AppState = {
	rows: []
};

export function reducer(state = initialState, action: Actions) {
	switch (action.type) {
		case ActionTypes.ADD_ROW:
			return {
				...state,
				rows: [ ...state.rows, action.payload ]
			};
		case ActionTypes.DEL_ROW:
			return {
				...state,
				rows: state.rows.filter((row) => row.id != action.payload)
			};
		default:
			return state;
	}
}

const getFeatureState = createFeatureSelector<AppState>('appState');

export const getRows = createSelector(getFeatureState, (state: AppState) => state.rows);
