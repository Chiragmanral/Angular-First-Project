import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../../../tasks.service';

@Component({
  selector: 'app-delete-completed-task',
  standalone: true,
  imports: [],
  templateUrl: './delete-completed-task.component.html',
  styleUrl: './delete-completed-task.component.scss'
})
export class DeleteCompletedTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Input({required : true}) taskId! : string;
  private tasksService = inject(TasksService);


  onCancel() {
    this.close.emit();
  }

  onConfirm() {
    this.tasksService.removeCompletedtask(this.taskId);
  }
}
