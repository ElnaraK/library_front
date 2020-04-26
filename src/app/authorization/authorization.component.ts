import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  authorized = false;
  logged = true;
  mail: string;
  password1: string;
  password2: string;
  constructor(
    private userService: UserService,
  ) { }
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.authorized = true;
    }
  }
  loginPage(): void {
    this.logged = true;
  }
  registrationPage(): void {
    this.logged = false;
  }
  login() {
    this.userService.login(this.mail, this.password1)
      .subscribe(res => {

        localStorage.setItem('token', res.token);
        this.authorized = true;
        this.mail = '';
        this.password1 = '';
      });
    localStorage.setItem('mail', this.mail);
  }
  register(): void {
    if (this.mail !== '' && this.password1 !== '' && this.password1 === this.password2) {
      this.userService.register(this.mail, this.password1).subscribe( res => {
        this.login();
      });
    }
    this.authorized = true;
    this.mail = '';
    this.password1 = '';
    this.password2 = '';
  }

  logOut() {
    localStorage.clear();
    this.authorized = false;
  }
}
