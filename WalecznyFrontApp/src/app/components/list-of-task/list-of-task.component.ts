import { Component, OnInit } from '@angular/core';
import { ITask } from "app/components/task/ITask";

@Component({
  selector: 'app-list-of-task',
  templateUrl: './list-of-task.component.html',
  styleUrls: ['./list-of-task.component.css']
})
export class ListOfTaskComponent implements OnInit {

  newTask:ITask=<ITask>{};
  tasks: ITask[]
  ifAddNewIt: boolean = false;
  constructor() {
    this.tasks = <ITask[]>[
      <ITask>{ name: "pierwszy", category: "osobiste", executionTime: "1min", priority: 50, status: "rozpo" },
      <ITask>{ name: "drugi", category: "osobiste", executionTime: "2min", priority: 50, status: "zak" }
    ]
  }

  newTaskFocusIn() {
    this.ifAddNewIt = false;
  }
  newTaskFocusOut() {
    this.ifAddNewIt = true;
    setTimeout(() => {
      if (this.ifAddNewIt) {
        this.addItem();
        this.createNewEmptyItem();
      }
    });
  }
  ngOnInit() {
  }
  createNewEmptyItem() {
    this.newTask=<ITask>{}
  }
  addItem() {
    let task=this.newTask;
    this.tasks.push(task);
  }



}
