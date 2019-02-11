import { Injectable } from '@angular/core';
import { Row } from '../models/row.model';

@Injectable({
	providedIn: 'root'
})
export class ColsService {
	constructor() {}

	public getItemsNumber(rows: Row[]): number {
		return rows.length > 0
			? rows.reduce((state, current) => {
					return state.items.length > current.items.length ? state : current;
				}).items.length
			: 0;
	}
}
