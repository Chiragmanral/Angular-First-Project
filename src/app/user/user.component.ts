import { Component, EventEmitter, Input, Output, computed, input, output, signal } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
import { DeleteUserComponent } from './delete-user/delete-user.component';

// import { DUMMY_USERS } from '../dummy_users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id : string;
//   name : string;
//   avatar : string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent, DeleteUserComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => `../assets/users/${this.selectedUser().avatar}`);

  // get imagePath() {
  //   return `../assets/users/${this.selectedUser.avatar}`
  // }

  // onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

  // @Input({required : true}) id! : string;
  // @Input({required : true}) avatar! : string;
  // @Input({required : true}) name! : string;
  // avatar = input.required<string>();
  // name = input.required<string>();

  @Input({required : true}) isSelected! : boolean;
  @Input({required : true}) user !: User;
  @Output() select = new EventEmitter<string>(); // Output Decorator
  @Output() remove = new EventEmitter<string>(); // Output Decorator
  // select = output<string>(); //output function
  isConfirmDelete = false;

  // imagePath = computed(() => {
  //   return `../assets/users/${this.avatar()}`;
  // })

  get imagePath() {
    return `../assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

  removeUser() {
    this.isConfirmDelete = true;
  }

  onCloseDeleteUser() {
    this.isConfirmDelete = false;
  }

}

// For reading the signal we have to execute it by using parentheses().
// But for updating or writing the signal we don't use parentheses like in using properties or getters of the class.
