import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: [ './input.component.scss' ]
})
export class InputComponent implements OnInit {
	text: string;

	constructor() {}
	ngOnInit() {}

	@Output() MessageEvent = new EventEmitter<string>();

	sendMessage() {
		this.MessageEvent.emit(this.text);
	}
}
