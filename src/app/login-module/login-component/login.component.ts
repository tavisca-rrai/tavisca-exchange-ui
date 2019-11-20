import { LoginService } from "../../services/login-services/login.service";
import { Component, OnInit } from "@angular/core";
import { UserSignInDetails } from "../models/user-signin-details";
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user/user.service';
import { UserProfile } from 'src/app/models/user/user-profile';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router, private userService: UserService) { }
  userDetails: UserSignInDetails;
  errorMessage: string = "";
  ngOnInit() {
    localStorage.clear();
    this.userDetails = new UserSignInDetails();
  }
  tryLogin() {
    this.loginService.verifyUserCredentials(this.userDetails).subscribe(
      (data) => {
        let userProfile = new UserProfile();
        userProfile.id = data.userId;
        this.userService.saveUserToStorage(userProfile);
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
