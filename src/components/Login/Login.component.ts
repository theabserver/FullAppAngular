import { Component, OnInit, ViewChild, Injectable  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/services/login.service';
import { TokenManager } from 'src/app/TokenManager';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
  providers: [LoginService]
})
@Injectable()
export class LoginComponent implements OnInit{
  @ViewChild('loginForm') form!: NgForm;  // indicates optional field
  onSubmit() {
    const {email, password} = this.form.value
    this.form.reset()
    this.loginService.authUser(email, password).subscribe((res) => {
      if(res.success){
        const {token, Email, id} = res.user
        localStorage.setItem('u_email', Email)
        localStorage.setItem('u_id', id)
        this.tokenManager.setToken(token)
      }
    });
  }
  user = {
    email: '',
    password: ''
  }
  ngOnInit(): void {
  }
  constructor(private loginService:LoginService, private tokenManager:TokenManager){}
}
