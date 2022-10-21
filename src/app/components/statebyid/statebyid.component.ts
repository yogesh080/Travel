import { Component, OnInit } from '@angular/core';
import { StateServicesService } from 'src/app/services/stateService/state-services.service';

@Component({
  selector: 'app-statebyid',
  templateUrl: './statebyid.component.html',
  styleUrls: ['./statebyid.component.scss']
})
export class StatebyidComponent implements OnInit {
  StateList: any;
  constructor(private getstate: StateServicesService) { }

  ngOnInit(): void {
   
  }
  getAllStates() {
    console.log("got all Booook")
    this.getstate.Getallstate().subscribe((response: any) => {
      console.log(response)

      this.StateList = response.data;
      console.log(this.StateList)

    })
  }
}
