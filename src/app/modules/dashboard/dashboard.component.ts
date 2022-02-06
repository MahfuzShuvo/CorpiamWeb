import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
// import { Label, MultiDataSet } from 'ng2-charts';
import { HeaderService } from 'src/app/services/header.service';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	public projectCompletion: number | undefined;
	public projectCompletion2: number | undefined;
	public projectCompletion3: number | undefined;
	public projectCompletion4: number | undefined;
	public projectCompletion5: number | undefined;
	public projectCompletion6: number | undefined;

	constructor(private headerService: HeaderService) { }

	ngOnInit(): void {
		Promise.resolve().then(() => this.headerService.setTitle('Dashboard'));
		Promise.resolve().then(() => this.headerService.setSubTitle('Analytics'));
		this.getProjectChart();

		this.projectCompletion = 60;
		this.projectCompletion2 = 20;
		this.projectCompletion3 = 40;
		this.projectCompletion4 = 80;
		this.projectCompletion5 = 50;
		this.projectCompletion6 = 10;
	}

	getProjectChart() {
		// var ctx = document.getElementById("myChart");
		var chart = new Chart('myChart', {
			type: 'doughnut',
			options:{
				legend:{
				  display: true, // show legend (true/false)
				  position:'right',//legend positon (top/bottom/left/right)
				  labels: {
					usePointStyle: true,//choose legend shape.(true/false)
					fontColor:'#2D3748', // legend font color
					fontSize: 10,
					fontFamily: 'Poppins'
				  },
				},
				cutoutPercentage: 80, // empty space percentage of doughnut's center
				layout:{
					padding: 20
				},
				responsive: false, // (true/false) responsive divice width
			  },
			data: {
				labels: ['Total Completed (55)', 'Monthly Goal (55)', 'Sales Improve (55)'],
				datasets: [{
				  data: [160, 80, 50],
				  backgroundColor: ['#2E5BFF', '#6C5CE7', '#55EFC4'],
				  borderWidth: 0,// division line width. (default=1)
				}]
			}
		});
		
	}

}
