import { Component, OnInit } from '@angular/core';
import { ITask } from "app/components/task/ITask";

@Component({
  selector: 'app-list-of-task',
  templateUrl: './list-of-task.component.html',
  styleUrls: ['./list-of-task.component.css']
})
export class ListOfTaskComponent implements OnInit {
  tasks:ITask[]
  constructor() {
    this.tasks=<ITask[]>[
      <ITask>{name:"pierwszy",category:"osobiste",executionTime:"1min",priority:50,status:"rozpo"},
      <ITask>{name:"drugi",category:"osobiste",executionTime:"2min",priority:50,status:"zak"}
    ]

    
   }

  ngOnInit() {
  }

}
