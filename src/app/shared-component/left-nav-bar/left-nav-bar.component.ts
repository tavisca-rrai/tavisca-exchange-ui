import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LeftNavBarComponent implements OnInit {
  minValue: number = 0;
  maxValue: number = 50000;
  constructor() { }
  content = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42];
  categories = ["Electronics","Clothing","Books","Sports"];
  options: Options = {
    floor: 0,
    ceil: 50000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '₹' + value.toString();
        case LabelType.High:
          return '₹' + value.toString();
        default:
          return '₹' + value;
      }
    }
  };
  ngOnInit() {
  }
}
