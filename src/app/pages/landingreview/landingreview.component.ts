import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-landingreview',
  templateUrl: './landingreview.component.html',
  styleUrls: ['./landingreview.component.scss']
})
export class LandingreviewComponent implements OnInit {
  sliderthree: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      // 1140: {
      //   items: 5
      // },
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
