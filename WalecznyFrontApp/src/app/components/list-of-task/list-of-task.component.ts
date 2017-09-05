import { Component, OnInit } from '@angular/core';
import { ITask } from "app/components/task/ITask";
import { TasksService } from "app/components/list-of-task/list-of-taks.service";
import { Observable,BehaviorSubject } from "rxjs/Rx";


@Component({
  selector: 'app-list-of-task',
  templateUrl: './list-of-task.component.html',
  styleUrls: ['./list-of-task.component.css'],
  providers: [TasksService]
})
export class ListOfTaskComponent implements OnInit {

  newTask: ITask = <ITask>{};
  tasksSubject: BehaviorSubject<ITask[]>
  ifAddNewIt: boolean = false;
  constructor(private taskService: TasksService) {
    this.tasksSubject = new BehaviorSubject(  this.taskService.getTasks());
    
  }

  newTaskFocusIn() {
    if (!this.newTask.priority)
      this.newTask.priority = 50;

    this.ifAddNewIt = false;
  }
  newTaskFocusOut() {
    this.ifAddNewIt = true;
    setTimeout(() => {
      if (this.ifAddNewIt) {
        this.handleAddItem();
      }
    }, 500);
  }

  handleAddItem() {
    if (!this.ifCorrect())
      return;
    this.addItem();
    this.createNewEmptyItem();
  }
  ifCorrect() {
    return this.newTask.name;
  }
  ngOnInit() {
  }
  createNewEmptyItem() {
    this.newTask = <ITask>{

    }
  }
  addItem() {
    let task = this.newTask;
    this.tasksSubject.next([task]);
  }



}
