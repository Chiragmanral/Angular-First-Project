import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy_users';
import { TasksComponent } from "./tasks/tasks.component";
import { AddUserComponent } from './user/add-user/add-user.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, AddUserComponent, CompletedTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  addUser = false;
  users = DUMMY_USERS;
  selectedUserId ?: string;
  private tasksService = inject(TasksService);
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

  get showCompletedTasks() {
    if(this.selectedUser) {
      if(this.tasksService.sizeOfSelectedUserCompletedTasks(this.selectedUser.id) > 0) return true;
      return false;
    }
    else return false;
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
    this.users = this.users.filter((user) => user.id !== userId);
  }

  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
