import { Component, OnInit, Input } from '@angular/core';
import { ITask } from "app/components/task/ITask";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input()
  task:ITask;

  constructor() {
    
   }
  ngOnInit() {
  }

}
