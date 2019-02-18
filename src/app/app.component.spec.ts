import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { RowsComponent } from './components/rows/rows.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { Store } from '@ngrx/store';
import { initialState } from './reducers/reducer';
import { Component, Output, EventEmitter, DebugElement, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { Row } from './models/row.model';
import * as Action from './actions/actions';

@Component({
	selector: 'app-input',
	template: ''
})
export class InputComponentMock {
	@Output() messageEvent = new EventEmitter<string>();
}

@Component({
	selector: 'app-rows',
	template: ''
})
export class RowsComponentMock {
	@Input() rows: Row[];
	@Output() delRow = new EventEmitter<string>();
}

@Component({
	selector: 'app-statistics',
	template: ''
})
export class StatisticsComponentMock {
	@Input() rows: Row[];
}

describe('AppComponent', () => {
	let component: AppComponent;
	let debugElement: DebugElement;
	let fixture: ComponentFixture<AppComponent>;
	let inputComponent: InputComponent;
	let rowsComponent: RowsComponent;
	let statisticsComponent: StatisticsComponent;
	let rowSubject: BehaviorSubject<Row[]>;

	beforeEach(
		async(() => {
			rowSubject = new BehaviorSubject(initialState.rows);

			TestBed.configureTestingModule({
				declarations: [ AppComponent, InputComponentMock, RowsComponentMock, StatisticsComponentMock ],
				providers: [
					{
						provide: Store,
						useValue: {
							dispatch: jasmine.createSpy('dispatch'),
							select: jasmine.createSpy('select').and.returnValue(rowSubject.asObservable())
						}
					}
				]
			}).compileComponents();

			fixture = TestBed.createComponent(AppComponent);
			debugElement = fixture.debugElement;
			component = fixture.componentInstance;
			inputComponent = debugElement.query(By.directive(InputComponentMock)).componentInstance;
			rowsComponent = debugElement.query(By.directive(RowsComponentMock)).componentInstance;
			statisticsComponent = debugElement.query(By.directive(StatisticsComponentMock)).componentInstance;
			fixture.detectChanges();
		})
	);

	afterEach(() => {
		rowSubject.next(null);
		rowSubject.complete();
	});

	describe('RowsComponent', () => {
		describe('Inputs', () => {
			describe('rows', () => {
				it('should equal value from parent', () => {
					let rowsMock: Row[];
					expect(rowsComponent.rows).toEqual(initialState.rows);
					rowsMock = [ { id: '1', items: [ 'test' ] } ];
					rowSubject.next(rowsMock);
					fixture.detectChanges();
					expect(rowsComponent.rows).toBe(rowsMock);
					rowsMock = [ { id: '1', items: [ 'test' ] }, { id: '2', items: [ 'test2' ] } ];
					rowSubject.next(rowsMock);
					fixture.detectChanges();
					expect(rowsComponent.rows).toBe(rowsMock);
				});
			});
		});
	});

	describe('StatisticsComponent', () => {
		describe('Inputs', () => {
			describe('Rows', () => {
				it('should equal value from parent', () => {
					let rowsMock: Row[];
					expect(statisticsComponent.rows).toEqual(initialState.rows);
					rowsMock = [ { id: '1', items: [ 'test' ] } ];
					rowSubject.next(rowsMock);
					fixture.detectChanges();
					expect(statisticsComponent.rows).toBe(rowsMock);
					rowsMock = [ { id: '1', items: [ 'test' ] }, { id: '2', items: [ 'test2' ] } ];
					rowSubject.next(rowsMock);
					fixture.detectChanges();
					expect(statisticsComponent.rows).toBe(rowsMock);
				});
			});
		});
	});

	describe('InputComponent', () => {
		describe('Outputs', () => {
			describe('messageEvent', () => {
				it(
					'should call addRow',
					inject([ Store ], (store: Store<any>) => {
						inputComponent.messageEvent.emit('1,2,3');
						expect(store.dispatch).toHaveBeenCalledWith(
							new Action.AddRow({
								id: jasmine.any(String) as any,
								items: [ '1', '2', '3' ]
							})
						);
					})
				);
			});
		});
	});

	describe('AppComponent', () => {
		it(
			'should call delRow',
			inject([ Store ], (store: Store<any>) => {
				let id = 'id-xxxxxxx';
				component.delRow(id);
				expect(store.dispatch).toHaveBeenCalledWith(new Action.DelRow(id));
			})
		);
	});
});
