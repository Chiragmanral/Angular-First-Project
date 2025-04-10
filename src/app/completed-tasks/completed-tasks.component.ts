import { Component, inject, Input } from '@angular/core';
import { TasksService } from '../tasks.service';
import { CompletedTaskComponent } from './completed-task/completed-task.component';

@Component({
  selector: 'app-completed-tasks',
  standalone: true,
  imports: [CompletedTaskComponent],
  templateUrl: './completed-tasks.component.html',
  styleUrl: './completed-tasks.component.scss'
})
export class CompletedTasksComponent {
  @Input({required : true}) userId! : string;
  private tasksService = inject(TasksService)

  get selectedUserCompletedTasks() {
    return this.tasksService.getUserCompletedTasks(this.userId);
  }
}
