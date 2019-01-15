import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: TaskModel[] = [
    {
      uid: 'aad6545',
      title: 'teste 1',
      done: true
    },
    {
      uid: 'dfafa5465',
      title: 'teste 2',
      done: false
    }
  ];

  selectedTask: TaskModel;

  constructor() { }

  ngOnInit() {
  }

  onPerfomTask(task: TaskModel): void{
    console.log(task);
  }

}
