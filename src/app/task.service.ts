import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { TaskModel } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: AngularFirestoreCollection<TaskModel>;

  constructor(private db: AngularFirestore) {
    this.setTasks();
  }

  private setTasks(): void {
    this.tasks = this.db.collection<TaskModel>('/tasks');
  }
}
