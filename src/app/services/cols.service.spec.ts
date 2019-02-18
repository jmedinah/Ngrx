import { TestBed } from '@angular/core/testing';

import { ColsService } from './cols.service';
import { Row } from '../models/row.model';

describe('ColsService', () => {
  let service: ColsService;
  beforeEach(() => TestBed.configureTestingModule({}));
  
  beforeEach(() => {
    service = TestBed.get(ColsService);
  });

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return the max number of items per row = 2', () => {
		let rowsMock: Row[] = [ { id: '1', items: [ 'test' ] }, { id: '2', items: [ 'test2' ,'test5'] } ];
		expect(service.getMaxNumber(rowsMock)).toEqual(2);
	});

	it('should return the min number of items per row = 1', () => {
		let rowsMock: Row[] = [ { id: '1', items: [ 'test' ] }, { id: '2', items: [ 'test2','trdtr' ] } ];
		expect(service.getMinNumber(rowsMock)).toEqual(1);
	});
});
