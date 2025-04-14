import { Component, inject, Input } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import {type Task} from '../../tasks/task/task.model';
import { DatePipe } from '@angular/common';
import { TasksService } from '../../tasks.service';
import { DeleteCompletedTaskComponent } from "./delete-completed-task/delete-completed-task.component";

@Component({
  selector: 'app-completed-task',
  standalone: true,
  imports: [CardComponent, DatePipe, DeleteCompletedTaskComponent],
  templateUrl: './completed-task.component.html',
  styleUrl: './completed-task.component.scss'
})
export class CompletedTaskComponent {
  @Input({required : true}) completedTask! : Task;
  private tasksService = inject(TasksService);
  isDeleteCompletedTask = false;

  onDeleteCompletedTask() {
    this.isDeleteCompletedTask = true;
    // e.preventDefault();
    // console.log(3);
  }

  onIncompleteTask() {
    this.tasksService.IncompleteTask(this.completedTask.id);
  }

  onCloseDeleteCompletedtask() {
    this.isDeleteCompletedTask = false;
  }

}
