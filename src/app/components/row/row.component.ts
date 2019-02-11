import { Component, OnInit, Input } from '@angular/core';
import { Row } from 'src/app/models/row.model';

@Component({
	selector: 'app-row',
	templateUrl: './row.component.html',
	styleUrls: [ './row.component.scss' ]
})
export class RowComponent implements OnInit {
	@Input() row: Row;
	@Input() itemsNumber: number;

	constructor() {}

	ngOnInit() {}
}
