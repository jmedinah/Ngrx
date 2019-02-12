import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Row } from 'src/app/models/row.model';

@Component({
	selector: 'app-statistics',
	templateUrl: './statistics.component.html',
	styleUrls: [ './statistics.component.scss' ]
})
export class StatisticsComponent implements OnInit {
	@Input() rows: Row[];

	constructor() {}

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges) {
		console.log(this.rows);
	}
}
