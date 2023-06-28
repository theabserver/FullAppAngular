import { Injectable } from '@angular/core';
import { Observable, tap, BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/user';
import { Router } from "@angular/router";
import { TokenManager } from 'src/app/TokenManager';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private userSubject = new BehaviorSubject<User | null>(null);
  userAuth = this.userSubject.asObservable();

  constructor(private http: HttpClient,  private readonly router: Router,  private tokenManager:TokenManager) {}

  authUser(u_email: string, u_password: string): Observable<any> {
    return this.http
      .post<{user:User}>('http://localhost:3300/login', {
        email: u_email,
        password: u_password,
      })
      .pipe(tap(({ user }) => this.setAuthUser(user)));
  }

  setAuthUser(user: User) {
    this.userSubject.next(user);
  }
  logoff(){
    this.userSubject.next(null);
    this.tokenManager.deleteToken()
    this.router.navigate(["/login"]);
  }
  public isAuthenticated = this.userAuth.pipe(map((user) => !!user))
}
