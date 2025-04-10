import { Component, EventEmitter, Output, Input} from '@angular/core';
import { DUMMY_USERS } from '../../dummy_users';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.scss'
})

export class DeleteUserComponent {
    @Output() close =  new EventEmitter<void>();
    @Input({required : true}) userId! : string;
    users = DUMMY_USERS;

    constructor() {
        const users = localStorage.getItem('users');
    
        if (users) {
          this.users = JSON.parse(users);
        }
    }

    onCancel() {
        this.close.emit();
    }

    onConfirm() {
        this.users = this.users.filter((user) => user.id !== this.userId);
        this.saveUsers();
    }

    private saveUsers() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }
}