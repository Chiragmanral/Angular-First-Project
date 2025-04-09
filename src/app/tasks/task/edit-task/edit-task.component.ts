import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../tasks.service';

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
  enteredTitle="";
  enteredSummary="";
  enteredDate="";

  onConfirm() {
    this.tasksService.editTask({
      title : this.enteredTitle,
      summary : this.enteredSummary,
      dueDate : this.enteredDate,
      id : this.taskId,
      userId : this.userId
    });
    this.close.emit();
  }
}
