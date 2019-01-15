import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { TaskModel } from './models/task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: AngularFirestoreCollection<TaskModel>;

  constructor(private db: AngularFirestore) {
    this.setTasks();
  }


  create(task: TaskModel): Promise<void> {

    const uid = this.db.createId();

    return this.tasks.doc<TaskModel>(uid).set({
      uid: uid,
      title: task.title,
      done: task.done
    });
  }

  update(task: TaskModel): Promise<void> {
    return this.tasks.doc<TaskModel>(task.uid).update(task);
  }

  delete(task: TaskModel): Promise<void> {
    return this.tasks.doc<TaskModel>(task.uid).delete();
  }

  get(uid: string): Observable<TaskModel> {
    return this.tasks.doc<TaskModel>(uid).valueChanges();
  }

  private setTasks(): void {
    this.tasks = this.db.collection<TaskModel>('/tasks');
  }
}
