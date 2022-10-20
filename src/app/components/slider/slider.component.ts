import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(config: NgbCarouselConfig,private route: Router) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  onclick()
  {
    this.route.navigateByUrl('login')
  }

  ngOnInit(): void {
  }
  imgCollection: Array<object> = [
    {
      image:"../../../assets/Slider/2/684534.webp",
      thumbImage: "../../../assets/Slider/2/684534.webp",
      title: 'Bangalore'
      
    }, {
      
      thumbImage: "../../../assets/Slider/2/684653.webp",
      title: 'Hyderabad'
    }, {
      
      thumbImage: "../../../assets/Slider/2/684657.webp",
      title: 'Jaipur'
    }, {
      
      thumbImage: "../../../assets/Slider/2/684765.webp",
      title: 'New Delhi'
    }, {
      
      thumbImage: "../../../assets/Slider/2/684938.webp",
      title: 'Udaipur'
    }, {
      
      thumbImage: "../../../assets/Slider/2/971346.webp",
      title: 'Mumbai'
    }
    , {
      
      thumbImage: "../../../assets/Slider/2/68606.webp",
      title: 'Goa North'
    }, {
      
      thumbImage: "../../../assets/Slider/2/684769.webp",
      title: 'Pondicherry'
    }, {
      
      thumbImage: "../../../assets/Slider/2/684682.webp",
      title: 'Lonavala'
    }, {
      
      thumbImage: "../../../assets/Slider/2/49646.webp",
      title: 'Goa'
    }
  ];
}
