import { Component, OnInit } from '@angular/core';
import { AdvertismentsService } from '@services/index';

@Component({
  selector: 'app-advertisments-list',
  templateUrl: './advertisments-list.component.html',
  styleUrls: ['./advertisments-list.component.css']
})
export class AdvertismentsListComponent implements OnInit {

  adsList = [];

  constructor(private advertismentsService: AdvertismentsService) { }

  ngOnInit() {
    this.advertismentsService.getAdvertismentsList().subscribe((data: any[]) => {
      this.adsList = data;
    })
  }

}
