import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  authorized = true;
  present = false;
  user: User = {
    mail: '',
    password1: '',
    password2: '',
    booksId: 1
  };
  currentUser: User;
  constructor(
    private userService: UserService,
  ) { }
  ngOnInit(): void {
  }
  loginPage(): void {
    this.authorized = true;
  }
  registrationPage(): void {
    this.authorized = false;
  }
  login(): void {
    if (this.user.mail !== '' && this.user.password1 !== '') {
      this.currentUser = this.user;
      this.user.mail = '';
      this.user.password1 = '';
      this.present = false;
    } else {
      this.user.mail = this.user.mail;
      this.user.password1 = this.user.password1;
      this.present = true;
    }
  }
  register(): void {
    if (this.user.mail !== '' && this.user.password1 !== '' && this.user.password1 === this.user.password2) {
      this.userService.addUser(this.user);
      this.user.mail = '';
      this.user.password1 = '';
      this.user.password2 = '';
      this.present = false;
    } else {
      this.user.mail = this.user.mail;
      this.user.password1 = this.user.password1;
      this.user.password2 = this.user.password2;
      this.present = true;
    }
  }
  clear(): void {
    this.user.mail = '';
    this.user.password1 = '';
    this.user.password2 = '';
  }
}
