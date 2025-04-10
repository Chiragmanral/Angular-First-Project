import { Component, inject, Input } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import {type Task} from '../../tasks/task/task.model';
import { DatePipe } from '@angular/common';
import { TasksService } from '../../tasks/tasks.service';

@Component({
  selector: 'app-completed-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './completed-task.component.html',
  styleUrl: './completed-task.component.scss'
})
export class CompletedTaskComponent {
  @Input({required : true}) completedTask! : Task;
  private tasksService = inject(TasksService);

  onDeleteCompletedTask() {

  }

  onIncompleteTask() {
    this.tasksService.IncompleteTask(this.completedTask.id);
  }


}
