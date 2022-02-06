import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	constructor(private headerService: HeaderService) { }

	ngOnInit(): void {
		Promise.resolve().then(() => this.headerService.setTitle('My Profile'));
		Promise.resolve().then(() => this.headerService.setSubTitle('Profile'));
	}

}
