import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/googleAuth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  hide = true;

  fullname:string='';
  email : string = '';
  password : string = '';



  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  register() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.register(this.email,this.password);
    this.email = '';
    this.password = '';

  }

}
