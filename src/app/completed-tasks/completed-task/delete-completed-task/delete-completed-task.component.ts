import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-completed-task',
  standalone: true,
  imports: [],
  templateUrl: './delete-completed-task.component.html',
  styleUrl: './delete-completed-task.component.scss'
})
export class DeleteCompletedTaskComponent {
  @Output() close = new EventEmitter<void>();

  onCancel() {
    this.close.emit();
  }

  onConfirm() {

  }
}
