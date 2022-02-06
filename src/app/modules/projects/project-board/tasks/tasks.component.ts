import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
	styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

	public projectCompletion:number | undefined;

	constructor() { }

	ngOnInit() {

		this.projectCompletion = 60;
	}

}
