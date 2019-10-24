import { LoginService } from "../../services/login-services/login.service";
import { Component, OnInit } from "@angular/core";
import { UserLoginDetails } from "../login-models/userLoginDetails";

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
