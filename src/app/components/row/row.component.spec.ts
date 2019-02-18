import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowComponent } from './row.component';
import { NgforbynumberPipe } from 'src/app/pipes/ngforbynumber.pipe';
import { ItemComponent } from '../item/item.component';

describe('RowComponent', () => {
	let component: RowComponent;
	let fixture: ComponentFixture<RowComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ RowComponent, NgforbynumberPipe, ItemComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(RowComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
