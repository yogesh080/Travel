import { Component, OnInit } from '@angular/core';
import { StateServicesService } from 'src/app/services/stateService/state-services.service';

@Component({
  selector: 'app-getall-state',
  templateUrl: './getall-state.component.html',
  styleUrls: ['./getall-state.component.scss']
})
export class GetallStateComponent implements OnInit {

  StateList=[];

  constructor(private getstate: StateServicesService) { }

  ngOnInit(): void {
    this.getAllStates();
  }

  getAllStates(){
    console.log("got all Booook")
    this.getstate.Getallstate().subscribe((response:any)=>{
      console.log(response)
      
      this.StateList = response.data;
      console.log(this.StateList)

    })

}

}
