import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material';
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

  loading: boolean = true;

  constructor(private taskService: TaskService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.tasks$ = this.taskService.tasks.valueChanges();

    this.tasks$.pipe(
      take(1)
    ).subscribe( () => this.loading = false );
  }

  onPerfomTask(task: TaskModel): void {
    task.done = !task.done;
    this.taskService.update(task);
  }

  showDialog(task?: TaskModel): void {
    const config: MatDialogConfig<any> = (task) ? { data: { task } } : null;
    this.dialog.open(TaskDialogComponent, config);
  }

  onDelete(task: TaskModel): void {
    this.taskService.delete(task);
  }
}
