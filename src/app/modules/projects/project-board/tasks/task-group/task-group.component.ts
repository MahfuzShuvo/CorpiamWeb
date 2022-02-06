import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-group',
  templateUrl: './task-group.component.html',
  styleUrls: ['./task-group.component.css']
})
export class TaskGroupComponent implements OnInit {

  @Input() projectCompletion: any;

  constructor() { }

  ngOnInit() {
  }

}
