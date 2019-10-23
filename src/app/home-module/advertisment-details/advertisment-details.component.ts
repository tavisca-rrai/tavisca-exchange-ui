import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-advertisment-details',
  templateUrl: './advertisment-details.component.html',
  styleUrls: ['./advertisment-details.component.css']
})
export class AdvertismentDetailsComponent implements OnInit {
  public itemtitle = "Maruti Suzuki Alto 800 Lxi, 2012, Petrol";
  public itemprice = "₹ 1,65,000";
  public location = "Thane , Maharashtra";
  public postdate = "24 July";
  public description = "Make - Maruti Suzuki Ertiga zxi +Hybrid petrol";

  public sellername = "M S Motors";
  public sellerduartion = "May 2017";

  constructor() { }

  ngOnInit() {
  }

}
