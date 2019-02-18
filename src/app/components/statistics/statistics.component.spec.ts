import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { StatisticsComponent } from './statistics.component';
import { ColsService } from 'src/app/services/cols.service';

describe('StatisticsComponent', () => {
	let component: StatisticsComponent;
	let fixture: ComponentFixture<StatisticsComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ StatisticsComponent ],
				providers: [
					{
						provide: ColsService,
						useValue: {
              getMaxNumber: jasmine.createSpy('getMaxNumber').and.returnValue(5)
            }
					}
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(StatisticsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
  });
  
});
