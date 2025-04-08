import { Component, EventEmitter, inject, Input, output, Output } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

import {type Task} from './task.model';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({required : true}) task! : Task;
  private tasksService = inject(TasksService);
  // @Output() complete = new EventEmitter<string>();
  // complete = output<string>();

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
