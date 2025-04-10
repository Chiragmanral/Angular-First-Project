import { Component , EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type TaskData } from './new-task/new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required : true}) userId! : string;
  @Input({required : true}) name! : string;
  isAddingTask = false;
  isEditingTask = false;
  // private tasksService : TasksService;

  constructor(private tasksService : TasksService) {
    // this.tasksService = tasksService;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteRemoveTask(taskId : string) {
    this.tasksService.removeTask(taskId);
  } 

  onAddTask() {
    this.isAddingTask = true;
  }

  onCancelButton() {
    this.isAddingTask = false;
  }

  onCreateTask(taskData : TaskData) {
    this.tasksService.addTask(taskData, this.userId)
    this.isAddingTask = false;
  } 
}
