import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-task-group-item',
	templateUrl: './task-group-item.component.html',
	styleUrls: ['./task-group-item.component.css']
})
export class TaskGroupItemComponent implements OnInit {

	@Input() projectCompletion: any;

	constructor() { }

	ngOnInit() {
	}

}
