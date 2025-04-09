import { Component, EventEmitter, inject, Input, output, Output } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

import {type Task} from './task.model';
import { TasksService } from '../tasks.service';
import { EditTaskComponent } from "./edit-task/edit-task.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe, EditTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({required : true}) task! : Task;
  private tasksService = inject(TasksService);
  // @Output() complete = new EventEmitter<string>();
  // complete = output<string>();
  isEditingTask = false;

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }

  onDeleteTask() {
    let answer = confirm("Do you wanna delete it??");
    // console.log(answer);
    if(answer === true) {
      this.tasksService.removeTask(this.task.id);
    }
  }

  onEditTask() {
    this.isEditingTask = true;
    
  }

  onCloseEditTask() {
    this.isEditingTask = false;
  }
}
