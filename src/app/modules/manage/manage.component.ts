import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

	constructor(private headerService: HeaderService) { }

	ngOnInit(): void {
		Promise.resolve().then(() => this.headerService.setTitle('Manage'));
		Promise.resolve().then(() => this.headerService.setSubTitle('Manage'));
	}

}
