import { Injectable } from '@angular/core'
import { ITask } from "app/components/task/ITask";
import {Observable}from "rxjs"

@Injectable()
export class TasksService {
    getTasks():ITask[] {
        let el= <ITask[]>[
            <ITask>{ name: "pierwszy", category: "osobiste", executionTime: "1min", priority: 50, status: "rozpo" },
            <ITask>{ name: "drugi", category: "osobiste", executionTime: "2min", priority: 50, status: "zak" }];
       return el;
    }
}