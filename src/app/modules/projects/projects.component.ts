import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

	public projectCompletion: number | undefined;
	public projectCompletion2: number | undefined;
	public projectCompletion3: number | undefined;

	constructor(private headerService: HeaderService) { }

	ngOnInit(): void {
		Promise.resolve().then(() => this.headerService.setTitle('Projects'));
		Promise.resolve().then(() => this.headerService.setSubTitle('Tables'));

		this.projectCompletion = 60;
		this.projectCompletion2 = 20;
		this.projectCompletion3 = 40;
	}

}
