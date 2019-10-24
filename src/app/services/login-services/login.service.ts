import { environment } from "src/environments/environment";
import { loginEnviroment } from "../../../environments/loginSettings";

import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}

  verifyUserCredentials(userDetails): Observable<any> {
    return this.http
      .post<any>(
        loginEnviroment.loginBaseUrl +
          environment.version +
          environment.applicationName +
          loginEnviroment.signInPath,
        JSON.stringify(userDetails),
        httpOptions
      )
      .pipe(
        tap(userDetails => console.log(userDetails)),
        catchError(this.handleError<any>("Credential Verification"))
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
