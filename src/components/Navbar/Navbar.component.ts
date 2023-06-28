import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  constructor(private loginService: LoginService) { }
  @Output() logoffEmitter = new EventEmitter()
  ngOnInit() {
  }
  callLogOff() {
    this.logoffEmitter.emit()
  }
  isLoggedIn = this.loginService.isAuthenticated
    .pipe(
      map((isLoggedIn) =>
        isLoggedIn
      )
    );
}
