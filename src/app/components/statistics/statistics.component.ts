import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Row } from 'src/app/models/row.model';
import { Statistics } from 'src/app/models/statistics.model';
import { ColsService } from 'src/app/services/cols.service';

@Component({
	selector: 'app-statistics',
	templateUrl: './statistics.component.html',
	styleUrls: [ './statistics.component.scss' ]
})
export class StatisticsComponent implements OnInit {
	@Input() rows: Row[];
	public statistics: Statistics = { rowsAdded: 0, rowsDeleted: 0, maxItemsRow: 0, minItemsRow: 0 };
	private _currentRows: number = 0;

	constructor(private _colService: ColsService) {}

	ngOnInit() {}

	public ngOnChanges(changes: SimpleChanges):void {
		if (!changes.rows.firstChange) {
			this.setStatistics(changes.rows);
		}
	}

	private setStatistics(rowsStats): void {
		this.statistics.maxItemsRow = this._colService.getMaxNumber(rowsStats.currentValue);
		this.statistics.minItemsRow = this._colService.getMinNumber(rowsStats.currentValue);
		if (this._currentRows >= rowsStats.currentValue.length) {
			this.statistics.rowsDeleted += 1;
		} else {
			this.statistics.rowsAdded += 1;	
		}
		this._currentRows = rowsStats.currentValue.length;
	}
}
