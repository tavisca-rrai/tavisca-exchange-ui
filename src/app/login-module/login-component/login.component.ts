import { LoginService } from "../../services/login-services/login.service";
import { Component, OnInit } from "@angular/core";
import { UserSignInDetails } from "../models/user-signin-details";
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router, private cookieService: CookieService) { }
  userDetails: UserSignInDetails;
  errorMessage: string = "";
  ngOnInit() {
    this.userDetails = new UserSignInDetails();
  }
  tryLogin() {
    this.loginService.verifyUserCredentials(this.userDetails).subscribe(
      (data) => {
        this.cookieService.set('userId', JSON.parse(JSON.stringify(data))["userId"]); // To Set Cookie
        this.router.navigateByUrl("/products");
      },
      err => {
        if (err.status == 0) {
          this.errorMessage = "Could not connect to server, please try after some time";
        }
        else {
          this.errorMessage = "Invalid Username or Password";
        }
      }
    );
  }
  clearErrorMessages() {
    this.errorMessage = "";
  }
}
