import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import {TaskModel} from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  tasks$: Observable<TaskModel[]>;

  constructor(
    private db: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.tasks$ = this.db.collection<TaskModel>('/tasks').valueChanges();
  }



}
