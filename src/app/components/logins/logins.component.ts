import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/googleAuth/auth.service';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.scss']
})
export class LoginsComponent implements OnInit {

  email : string = '';
  password : string = '';

  
  hide = true;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  login() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.login(this.email,this.password);
    
    this.email = '';
    this.password = '';

  }

  signInWithGoogle() {
    this.auth.googleSignIn();
  }

}
