import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class StateServicesService {

  token: any;

  constructor(private httpService: HttpServiceService) {
    this.token = localStorage.getItem("token")
  }

  Getallstate() {
    this.token = localStorage.getItem('token')
    console.log("cool")
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token

      })

    }
    return this.httpService.GetService('/AddState/getAllState', true, header)
  }
}
