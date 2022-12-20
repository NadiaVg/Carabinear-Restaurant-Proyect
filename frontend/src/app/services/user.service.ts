import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../auth/user';

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'})
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  AUTH_SERVER_ADDRESS:  string  =  'http://localhost:8080';

  constructor(private  httpClient:  HttpClient,) { }

  private getOptions(token){

    let bearerAccess = 'Bearer ' + token;

    let options = {
      headers: {
        'Authorization' : bearerAccess,
        'Content-Type' : 'application/x-www-form-urlencoded',
      }
      , withCredentials: true
    };

    return options;
  }

  getUsers(token) {
    let myOptions = this.getOptions(token);
    console.log(myOptions)
    // return this.httpClient.get(`/api/users`, myOptions);


    return this.httpClient.get(`/api/users`, myOptions).pipe(
      tap(function (res) {
          console.log(res);
        })
    );
  }


  getOneUser(id, token) {
    let myOptions = this.getOptions(token);
    console.log(myOptions)
    // return this.httpClient.get(`/api/users/` + id, myOptions);


    return this.httpClient.get(`/api/users/` + id, myOptions).pipe(
      tap(function (res) {
          console.log(res);
        })
    );
  }

  updateUser(id, user, token){
    let myOptions = this.getOptions(token);
    let data = new FormData();
    data.append("name", user.name);
    data.append("email", user.email);
    data.append("CP", user.CP);

    return this.httpClient.put("/api/users" + '/' + id, data, myOptions)
  }
  



}
