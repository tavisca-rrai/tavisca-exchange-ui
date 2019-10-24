import { LoginService } from "../../services/login-services/login.service";
import { Component, OnInit } from "@angular/core";
import { UserSignInDetails } from "../models/user-signin-details";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) { }
  userDetails: UserSignInDetails;
  isInvalid = false;
  ngOnInit() {
    this.userDetails = new UserSignInDetails();
  }
  tryLogin() {
    this.loginService.verifyUserCredentials(this.userDetails).subscribe(
      response => {
        //temporary, after completeion we will redirect to home page
        console.log(response);
        alert("You are successfully logged in!");
      },
      err => {
        console.log(err.error);
        this.isInvalid = true;
      }
    );
  }
  loginClick() {
    this.isInvalid = false;
  }
}
