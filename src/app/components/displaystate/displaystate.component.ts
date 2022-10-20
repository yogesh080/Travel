import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-displaystate',
  templateUrl: './displaystate.component.html',
  styleUrls: ['./displaystate.component.scss']
})
export class DisplaystateComponent implements OnInit {

  @Input() StateArray:any;
  constructor() { }

  ngOnInit(): void {
    console.log("Get all Statess", this.StateArray)
  }
  

}
