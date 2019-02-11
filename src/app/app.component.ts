import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './models/app-state.model';
import { Row } from './models/row.model';
import * as Action from './actions/actions';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'Exercise';
	appState: AppState;
	rows$: Observable<Row[]>;

	constructor(private _store: Store<any>) {}

	ngOnInit() {
		this.rows$ = this._store.select((state: AppState) => state['appState'].rows);
	}

	public addRow(items: string): void {
		let row: Row = { id: '', items: [] };
		row.id = 'id-' + Math.random().toString(36).substr(2, 16);
		row.items = items.split(',');
		this._store.dispatch(new Action.AddRow(row));
	}

	public delRow(id: string): void {
		this._store.dispatch(new Action.DelRow(id));
	}
}
