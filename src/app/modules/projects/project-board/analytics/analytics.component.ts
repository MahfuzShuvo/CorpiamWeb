import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

	public projectCompletion:number | undefined;

	constructor() { }

	ngOnInit() {

		this.projectCompletion = 60;
	}

}
