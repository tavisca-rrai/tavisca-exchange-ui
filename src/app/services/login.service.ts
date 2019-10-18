import { Api } from "./../api/api";
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
  constructor(private http: HttpClient, private api: Api) {}

  verifyUserCredentials(userDetails): Observable<any> {
    console.log(this.api.getApiUrl("signin"));

    return this.http
      .post<any>(
        this.api.getApiUrl("signin"),
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
