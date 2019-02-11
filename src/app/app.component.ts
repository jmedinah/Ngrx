import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './models/app-state.model';
import { Row } from './models/row.model';
import * as Action from './actions/actions';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'Exercise';
	appState: AppState;
	rows: Row[];
	row: Row;

	constructor(private store: Store<any>) {}

	ngOnInit() {
		this.store.select('appState').subscribe((mainState: AppState) => {
			this.rows = mainState.rows;
		});
	}

	getInput(items: string) {
		this.row = { id: '', items: [] };
		this.row.id = 'id-' + Math.random().toString(36).substr(2, 16);
		this.row.items = items.split(',');
		this.store.dispatch(new Action.AddRow(this.row));
	}

	delRow(id: string) {
		this.store.dispatch(new Action.DelRow(id));
	}
}
