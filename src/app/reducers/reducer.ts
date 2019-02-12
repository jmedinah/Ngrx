import { AppState } from '../models/app-state.model';
import { Actions, ActionTypes } from '../actions/actions';

export let initialState: AppState = {
	rows: [],
	statistics: { rowsAdded: 0, rowsDeleted: 0, maxItemsRow: 0, minItemsRow: 0 }
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

export const getRows = (state: AppState) => state.rows;