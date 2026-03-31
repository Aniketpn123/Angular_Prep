import { Component } from '@angular/core';
import { Login } from '../models/login';
@Component({
  selector: 'app-login-details',
  imports: [],
  templateUrl: './login-details.html',
  styleUrl: './login-details.css',
})
export class LoginDetails {
     login1:Login = new Login('aniket','12345');
     login2:Login = new Login('ani','123');
}
