import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = 'http://localhost:8080/api/v1/user';

  requestHeader = new HttpHeaders(
    {"No-Auth": "True"}
  );
  constructor(private httpClient: HttpClient) { }

  public login(loginData: any) {
    return this.httpClient.post(this.PATH_OF_API + '/login', loginData, {headers: this.requestHeader});
  }
}
