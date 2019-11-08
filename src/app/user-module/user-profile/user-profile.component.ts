import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  hideMenu: boolean;
  userId: "1234";
  userName = "Nikita Narkhede";
  userContactNumber = "8485733995";
  userEmailId = "demo@something.com";
  profileImageUrl = "https://scontent-frx5-1.cdninstagram.com/vp/b8ce57551b48edfec3b1e644e9a47f9b/5E4F1F60/t51.2885-19/11821175_1046879962002756_496959586_a.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com";

  constructor() { }

  ngOnInit() {
  }

}
