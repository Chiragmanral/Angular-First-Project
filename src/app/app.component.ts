import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy_users';
import { TasksComponent } from "./tasks/tasks.component";
import { AddUserComponent } from './user/add-user/add-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, AddUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  addUser = false;
  users = DUMMY_USERS;
  selectedUserId ?: string;
  isConfirmDelete = false;
  private images = ['user-1.jpg', 'user-2.jpg', 'user-3.jpg', 'user-4.jpg', 'user-5.jpg', 'user-6.jpg'];
  private randomUserImage() {
    let index = Math.floor((Math.random() * this.images.length));
    return this.images[index];
  }

  constructor() {
    const users = localStorage.getItem('users');

    if (users) {
      this.users = JSON.parse(users);
    }
  }

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)
  }

  onSelectUser(id : string) {
    this.selectedUserId = id;
  }

  onAddUser() {
    this.addUser = true;
  }

  onClose() {
    this.addUser = false;
  }

  onSubmit(userName : string) {
    if(userName) {
      this.users.push({
        id : new Date().getMilliseconds().toString(),
        name : userName,
        avatar : this.randomUserImage()
      })
      this.onClose();
      this.saveUsers();
    }
    else {
      alert("Please enter a valid username");
      return;
    }
  }

  onRemoveUser(userId : string) {
    this.isConfirmDelete = true;
    this.users = this.users.filter((user) => user.id !== userId);
  }

  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
