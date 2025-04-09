import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  @Output() close = new EventEmitter<void>();
  @Output() addUser = new EventEmitter<string>();
  firstName = "";
  lastName = "";

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    if(this.firstName) {
      this.addUser.emit(`${this.firstName} ${this.lastName}`);
    }
    else {
      alert("Please enter the first name");
    }
  }
}
