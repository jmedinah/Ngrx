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

	@Output() messageEvent = new EventEmitter<string>();

	public sendMessage(): void {
		this.messageEvent.emit(this.text);
	}
}
