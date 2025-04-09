import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type TaskData } from './new-task.model';
import { TasksService } from '../tasks.service';
import { Title } from '@angular/platform-browser';
import { InvalidDataModalBoxComponent } from './invalid-data-modal-box/invalid-data-modal-box.component';

type Message = "date" | "title" | "date and title";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, InvalidDataModalBoxComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Input({required : true}) userId! : string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  isTaskDataValid = true;
  modalMessage !: Message;
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

  onClose() {
    this.isTaskDataValid = true;
  }

  onCreate() {
    if(this.enteredTitle && this.enteredDate) {
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
      else if(this.enteredTitle && !this.enteredDate) {
        // console.log("modal open");
        // this.ifInvalidDate();
        this.isTaskDataValid = false;
        this.modalMessage = "date"; 
      }
      else if(!this.enteredTitle && this.enteredDate) {
        // alert('Please enter a valid title');
        this.isTaskDataValid = false;
        this.modalMessage = "title"; 
      }
      else {
        // alert("Please enter the valid date and title");
        this.isTaskDataValid = false;
        this.modalMessage = "date and title"; 
        return;
      }
  }
}
