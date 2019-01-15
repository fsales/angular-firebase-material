import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { TaskModel } from '../models/task.model';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input()
  task: TaskModel;

  @Output()
  selectTask = new EventEmitter<TaskModel>();

  @Output()
  performTask = new EventEmitter<TaskModel>();

  constructor() { }

  ngOnInit() {
  }

  executeAction(action: string): void {
    this[action].emit(this.task);
  }
}
