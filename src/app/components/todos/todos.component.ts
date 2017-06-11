import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseAuthService } from '../../firebase-auth.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [FirebaseAuthService]
})
export class TodosComponent implements OnInit {
  todos: FirebaseListObservable<any[]>;
  msgVal: string = '';
  isLoggedIn: boolean;

  constructor(private db: AngularFireDatabase, public authService:FirebaseAuthService) {
    // If-else statement based on user being logged in
    this.authService.afAuth.authState.subscribe(auth => {
      if(auth){
        this.isLoggedIn = true;
        console.log('Logged In!', auth)
      } else {
        this.isLoggedIn = false;
        console.log('Logged Out!')
      }
    });

    // Shows a list of todos
    this.todos = db.list('/todos');
  }

  // Login with Google
  loginGoogle(){
    this.authService.loginGoogle();
  }

  // Logout
  logout(){
    this.authService.logout();
  }

  // Save new todo
  saveTodo(item: string){
    this.todos.push({todo: item});
    this.msgVal = '';
  }

  // Delete single todo item
  deleteTodo(key: string){
    this.todos.remove(key);
  }

  ngOnInit() {
  }

}
