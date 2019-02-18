import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { RowsComponent } from './rows.component';
import { Row } from 'src/app/models/row.model';
import { Input, Component } from '@angular/core';

@Component({
	selector: 'app-row',
	template: ''
})
export class RowComponentMock {
	@Input() row: Row;
	@Input() itemsNumber: number;
}

describe('RowsComponent', () => {
	let component: RowsComponent;
	let fixture: ComponentFixture<RowsComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ RowsComponent, RowComponentMock ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(RowsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
	
	it('execute function delRow',()=>{
		expect(component.deleteRow('id-xxxxxxx'));
	})
	

});
