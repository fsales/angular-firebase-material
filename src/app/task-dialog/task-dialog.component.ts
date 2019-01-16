import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskModel } from '../models/task.model';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {

  task: TaskModel = {
    uid: "",
    title: "",
    done: false
  };

  constructor(private taskService: TaskService, private dialogRef: MatDialogRef<TaskDialogComponent>) { }

  ngOnInit() {
  }

  onSave(): void {

    this.taskService.create(this.task).then(() => {

      this.dialogRef.close();
    }).catch((error) => {
      console.log(error);
    });
  }
}
