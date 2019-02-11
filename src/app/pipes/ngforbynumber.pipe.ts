import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'ngforbynumber'
})
export class NgforbynumberPipe implements PipeTransform {
	transform(itemsNumber: number): any {
		let array = [];
		for (let index = 0; index < itemsNumber; index++) {
			array.push(index);
		}
		return array;
	}
}
