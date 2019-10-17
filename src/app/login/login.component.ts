import { LoginService } from "./../services/login.service";
import { Component, OnInit } from "@angular/core";
import { UserLoginDetails } from "../models/userLoginDetails";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  userDetails: UserLoginDetails;
  ngOnInit() {
    this.userDetails = new UserLoginDetails();
  }

  tryLogin() {
    console.log(JSON.stringify(this.userDetails));
    this.loginService.verifyUserCredentials(this.userDetails).subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.log(err);
      }
    );
  }
}
