import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { TaskModel } from './models/task.model';

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
    return this.tasks.doc<TaskModel>(uid).set(JSON.parse(JSON.stringify({
      uid: uid,
      title: task.title,
      done: task.done
    })));
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
    this.tasks = this.db.collection<TaskModel>('/tasks',
      (ref: CollectionReference) => ref.orderBy('done', 'asc').orderBy('title', 'asc'));
  }
}
