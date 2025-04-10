import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../../../tasks.service';

@Component({
  selector: 'app-delete-task',
  standalone: true,
  imports: [],
  templateUrl: './delete-task.component.html',
  styleUrl: './delete-task.component.scss'
})
export class DeleteTaskComponent {
  @Input({required : true}) taskId! : string;
  @Output() close = new EventEmitter<void>();
  private tasksService = inject(TasksService);
  onCancel() {
    this.close.emit();
  }

  onConfirm() {
    this.tasksService.removeTask(this.taskId);
    this.close.emit();
  }
}
