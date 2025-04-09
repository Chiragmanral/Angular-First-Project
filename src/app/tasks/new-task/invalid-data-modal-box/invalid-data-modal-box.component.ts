import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-invalid-data-modal-box',
  standalone: true,
  imports: [],
  templateUrl: './invalid-data-modal-box.component.html',
  styleUrl: './invalid-data-modal-box.component.scss'
})
export class InvalidDataModalBoxComponent {
  @Input({required : true}) missingData! : string;
  @Output() close = new EventEmitter<void>();
  onCancel() {
    this.close.emit();
  }
}
