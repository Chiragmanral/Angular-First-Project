import { Component, Input, computed, input, signal } from '@angular/core';

// import { DUMMY_USERS } from '../dummy_users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
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

  // @Input({required : true}) avatar! : string;
  // @Input({required : true}) name! : string;
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    return `../assets/users/${this.avatar()}`;
  })

  // get imagePath() {
  //   return `../assets/users/${this.avatar}`;
  // }


  onSelectUser() {}

}

// For reading the signal we have to execute it by using parentheses().
// But for updating or writing the signal we don't use parentheses like in using properties or getters of the class.
