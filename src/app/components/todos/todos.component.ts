import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: FirebaseListObservable<any[]>;
  msgVal: string = '';

  constructor(private db: AngularFireDatabase) {
    this.todos = db.list('/todos');
  }

  saveTodo(item: string){
    this.todos.push({todo: item});
    this.msgVal = '';
  }

  deleteTodo(key: string){
    this.todos.remove(key);
  }

  ngOnInit() {
  }

}
