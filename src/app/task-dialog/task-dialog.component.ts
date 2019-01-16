import { Component, OnInit, Inject } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskModel } from '../models/task.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {

  dialogTitle = 'New Task';

  task: TaskModel = {
    uid: "",
    title: "",
    done: false
  };

  constructor(
    private taskService: TaskService,
    private dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    if (this.data) {
      this.dialogTitle = "Update Task";
      this.task = this.data.task;
    }
  }

  onSave(): void {

    const operation: Promise<void> = (!this.data || !this.data.task) ?
      this.taskService.create(this.task) :
      this.taskService.update(this.task);

    operation.then(() => {

      this.dialogRef.close();
    }).catch((error) => {
      console.log(error);
    });
  }
}
