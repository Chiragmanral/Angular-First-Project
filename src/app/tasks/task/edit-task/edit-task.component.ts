import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../tasks.service';
import { EditTaskService } from './edit-task.service';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss'
})
export class EditTaskComponent {
  @Input({required : true}) taskId! : string;
  @Input({required : true}) userId! : string;
  @Output() close = new EventEmitter<void>();
    onCancel() {
        this.close.emit();
    }

  private tasksService = inject(TasksService);
  private editTasksService = inject(EditTaskService);
  t1 = this.editTasksService.enteredTitle;
  t2 = this.editTasksService.enteredSummary;
  t3 = this.editTasksService.enteredDate;

  onConfirm() {
    this.tasksService.editTask({
      title : this.editTasksService.enteredTitle,
      summary : this.editTasksService.enteredSummary,
      dueDate : this.editTasksService.enteredDate,
      id : this.taskId,
      userId : this.userId
    });
    this.close.emit();
  }
}
