import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Row } from 'src/app/models/row.model';
import { ColsService } from 'src/app/services/cols.service';

@Component({
	selector: 'app-rows',
	templateUrl: './rows.component.html',
	styleUrls: [ './rows.component.scss' ]
})
export class RowsComponent implements OnInit, OnChanges {
	@Input() rows: Row[];
	@Output() DelRow = new EventEmitter<string>();
	maxNumber: number;
	constructor(private _colService: ColsService) {}

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges) {
		this.maxNumber = this._colService.getItemsNumber(changes.rows.currentValue);
	}

	delRow(id: string) {
		this.DelRow.emit(id);
	}
}
