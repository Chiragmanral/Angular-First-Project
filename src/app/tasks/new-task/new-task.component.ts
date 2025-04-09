import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type TaskData } from './new-task.model';
import { TasksService } from '../tasks.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Input({required : true}) userId! : string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  // Using signals
  // enteredTitle = signal("");
  // enteredSummary = signal("");
  // enteredDate = signal("");
  // Method-1 
  private tasksService = inject(TasksService);
  // method-2
  // constructor(private tasksService : TasksService) {}

  onCancel() {
    this.close.emit(); //bus iss new task add krne wale dialog box ko band kardo
  }

  onCreate() {
    if(this.enteredDate && this.enteredTitle) {
      this.tasksService.addTask(
        {
          title : this.enteredTitle,
          summary : this.enteredSummary,
          dueDate : this.enteredDate
        },
        this.userId
      );
      this.close.emit();
      }

      else {
        alert("Please enter the valid Due Date and Title");
        return;
      }
  }
}
