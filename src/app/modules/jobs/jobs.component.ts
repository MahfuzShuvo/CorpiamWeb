import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

	constructor(private headerService: HeaderService) { }

	ngOnInit(): void {
		Promise.resolve().then(() => this.headerService.setTitle('Jobs'));
		Promise.resolve().then(() => this.headerService.setSubTitle('Job Lists'));
	}

}
