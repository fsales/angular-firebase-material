import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { TaskModel } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks$: Observable<TaskModel[]>;

  selectedTask: TaskModel;

  constructor(private taskService: TaskService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.tasks$ = this.taskService.tasks.valueChanges();
  }

  onPerfomTask(task: TaskModel): void {
    console.log(task);
  }

  showDialog(): void {
    this.dialog.open(TaskDialogComponent);
  }

}
