import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/services/login.service';
import { TokenManager } from 'src/app/TokenManager';
import { map } from 'rxjs';
import { Router } from "@angular/router";
import { User } from 'src/models/user';
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
@Injectable()
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') form!: NgForm;  // indicates optional field
  token: string = this.tokenManager.getToken()
  onSubmit() {
    const { email, password } = this.form.value
    this.form.reset()
    this.loginService.authUser(email, password).subscribe((res) => {
      if (res.success) {
        const { token, Email, id } = res.user
        localStorage.setItem('u_email', Email)
        localStorage.setItem('u_id', id)
        this.tokenManager.setToken(token)
        this.router.navigate(["/home"])
      }
    });
  }
  user = {
    email: '',
    password: ''
  }
  getUserFromStorage() {
    const user: User = { id: Number(localStorage.getItem('u_id')), email: String(localStorage.getItem('u_email')), token: this.token };
    return user
  }
  ngOnInit(): void {
    this.token && this.loginService.setAuthUser(this.getUserFromStorage())
    this.isLoggedIn && this.router.navigate(["/home"])
  }
  constructor(private loginService: LoginService, private tokenManager: TokenManager, private readonly router: Router) { }
  isLoggedIn = this.loginService.isAuthenticated
    .pipe(
      map((isLoggedIn) =>
        isLoggedIn
      )
    );
}
