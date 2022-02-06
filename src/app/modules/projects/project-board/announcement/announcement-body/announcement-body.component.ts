import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-announcement-body',
	templateUrl: './announcement-body.component.html',
	styleUrls: ['./announcement-body.component.css']
})
export class AnnouncementBodyComponent implements OnInit {

	toggle1: boolean = true;
	toggle2: boolean = true;
	toggle3: boolean = true;

	constructor() { }

	ngOnInit() {
	}

}
