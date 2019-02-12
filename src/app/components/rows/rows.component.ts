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
	@Output() delRow = new EventEmitter<string>();

	public maxNumber: number;

	constructor(private _colService: ColsService) {}

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges) {
		this.maxNumber = changes.rows.firstChange ? 0 : this._colService.getMaxNumber(changes.rows.currentValue);
	}

	public deleteRow(id: string): void {
		this.delRow.emit(id);
	}
}
