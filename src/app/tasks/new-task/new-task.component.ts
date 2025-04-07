import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type TaskData } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  // Using signals
  // enteredTitle = signal("");
  // enteredSummary = signal("");
  // enteredDate = signal("");

  @Output() cancel = new EventEmitter<void>();

  @Output() addTask = new EventEmitter<TaskData>();

  onCancel() {
    this.cancel.emit(); //bus iss new task add krne wale dialog box ko band kardo
  }

  onCreate() {
    this.addTask.emit(
      {
        title : this.enteredTitle,
        summary : this.enteredSummary,
        date : this.enteredDate
      }
    )
  }
}
