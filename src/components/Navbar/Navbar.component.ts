import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/services/login.service';
@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  constructor(private loginService:LoginService) { }
  @Output() logoffEmitter = new EventEmitter()
  ngOnInit() {
  }

}
