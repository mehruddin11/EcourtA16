import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  registration(data: any) {
    return this.http.post(this.baseUrl + "/api/Registration", data);
  }
  verifyRegistration(data: any) {
    return this.http.post(this.baseUrl + "/api/VerifyRegistration", data);
  }
  createCredentials(data: any) {
    return this.http.post(this.baseUrl + "/api/CreateCredentials", data);
  }

  private error(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
