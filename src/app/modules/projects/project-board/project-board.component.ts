import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-project-board',
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.css']
})
export class ProjectBoardComponent implements OnInit {

	public projectCompletion:number | undefined;

	constructor(
		private headerService: HeaderService,
		private _location: Location
	) { }

	ngOnInit(): void {
		Promise.resolve().then(() => this.headerService.setTitle('Project name'));
		Promise.resolve().then(() => this.headerService.setSubTitle('Tables'));

		this.getHorizontalBarChart();

		this.projectCompletion = 60;
	}

	getHorizontalBarChart() {
		// var ctx = document.getElementById("myChart");
		var chart = new Chart('horizontalBarChartCanvas', {
			type: 'horizontalBar',
			options: {
				// tooltips: {
				//   	enabled: false
				// },
				responsive: true,
				legend: {
				   display: false,
				   position: 'bottom',
				   fullWidth: true,
				   labels: {
						boxWidth: 10,
						padding: 50,
				   }
				},
				cutoutPercentage: 80, // empty space percentage of doughnut's center
				scales: {
					yAxes: [{
						gridLines: {
							// color: "rgba(0, 0, 0, 0)"
							display: false
						},
						ticks: {
							fontColor:'#2D3748', // legend font color
							fontSize: 11,
							fontFamily: 'Poppins',
							fontStyle: "bold"
						},
					}],
					xAxes: [{
					  	display: true,
						ticks: {
							beginAtZero: true,
							suggestedMin: 0,
							suggestedMax: 100,
							stepSize: 10,
							fontColor: "#fff",
						},
					}],
					
				},
			 },
			 data: {
				labels: ["Name here", "Name here", "Name here", "Name here", "Name here", "Name here", "Name here"],
				datasets: [{
				   data: [90, 70, 60, 5, 20, 50, 75],
				   backgroundColor: ["#06398C", "#06398C", "#06398C", "#06398C", "#C4C4C4", "#C4C4C4", "#C4C4C4"],
				   barPercentage: .8,
				   categoryPercentage: .8
				}]
			},
		});
	}

	backClicked() {
		this._location.back();
	}

}
