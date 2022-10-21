import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StateServicesService } from 'src/app/services/stateService/state-services.service';

@Component({
  selector: 'app-displaystate',
  templateUrl: './displaystate.component.html',
  styleUrls: ['./displaystate.component.scss']
})
export class DisplaystateComponent implements OnInit {

  // @Input() StateArray:any;
  StateList: any;

  constructor(private getstate: StateServicesService,private route: Router) { }

  ngOnInit(): void {
    this.getAllStates();

  }

  getAllStates() {
    console.log("got all Booook")
    this.getstate.Getallstate().subscribe((response: any) => {
      console.log(response)

      this.StateList = response.data;
      console.log(this.StateList)

    })


  }
  onclick()
  {
    
    this.route.navigateByUrl('state')
  }

}
