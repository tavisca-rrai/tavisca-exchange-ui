import { Component, OnInit } from '@angular/core';
import { GetAdvertismentsListService } from '../../services/GetAdvertismentsList/get-advertisments-list.service';

@Component({
  selector: 'app-advertisments-list',
  templateUrl: './advertisments-list.component.html',
  styleUrls: ['./advertisments-list.component.css']
})
export class AdvertismentsListComponent implements OnInit {

  adsList = [];

  constructor(private getAdListService: GetAdvertismentsListService) { }

  ngOnInit() {
    this.getAdListService.sendGetRequest().subscribe((data: any[]) => {
      this.adsList = data;
    })
  }

}
