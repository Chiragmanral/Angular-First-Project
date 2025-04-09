import { Component, EventEmitter, inject, Input, output, Output } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

import {type Task} from './task.model';
import { TasksService } from '../tasks.service';
import { EditTaskComponent } from "./edit-task/edit-task.component";
import { EditTaskService } from './edit-task/edit-task.service';
import { DeleteTaskComponent } from './delete-task/delete-task.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe, EditTaskComponent, DeleteTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({required : true}) task! : Task;
  private tasksService = inject(TasksService);
  private editTaskService = inject(EditTaskService);
  // @Output() complete = new EventEmitter<string>();
  // complete = output<string>();
  isEditingTask = false;
  isConfirmDelete = false;

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }

  onDeleteTask() {
    this.isConfirmDelete = true;
    // let answer = false;
    // if(answer === true) {
    //   this.tasksService.removeTask(this.task.id);
    // }
  }

  onEditTask() {
    this.isEditingTask = true;
    this.editTaskService.enteredTitle = this.task.title;
    this.editTaskService.enteredSummary = this.task.summary;
    this.editTaskService.enteredDate = this.task.dueDate;
  }

  onCloseEditTask() {
    this.isEditingTask = false;
  }

  onCloseDeleteTask() {
    this.isConfirmDelete = false;
  }
}
