import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from  'rxjs/operators';
import { AuthResponse } from './auth-response';
import { User } from './user';
import { Storage } from '@ionic/storage';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER_ADDRESS:  string  =  'http://localhost:8080';

  constructor(private  httpClient:  HttpClient, private  storage:  Storage, private tokenService: TokenService) { }

  private getOptions(user: User){
    let base64EmailAndPassword = window.btoa(user.username + ":" + user.password);

    let basicAccess = 'Basic ' + base64EmailAndPassword;

    let options = {
      headers: {
        'Authorization' : basicAccess,
        'Content-Type' : 'application/json',
      }
      , withCredentials: true
    };

    return options;
  }


  register(user: User): Observable<AuthResponse> {
    console.log(user);
    return this.httpClient.post<AuthResponse>(`/api/users`, user, this.getOptions(user)).pipe(
      tap(async (res:  AuthResponse ) => {
        if (res.user) {
          await this.storage.set("token", res.access_token);
        }
      })

    );
  }

  login(user: User): Observable<AuthResponse> {
    return this.httpClient.post(`/api/users/signin`, null, this.getOptions(user)).pipe(
      tap(async (res: AuthResponse) => {

        if (res.user) {
          await this.storage.set("token", res.access_token);
          // await this.storage.set("idUser", res.user.id);
        }
      })
    );
  }

  async logout() {
    await this.tokenService.logout();
  }

  async isLoggedIn() {
    // return this.authSubject.asObservable();
    let token = this.tokenService.getToken();
    if (token){ //Just check if exists. This should be checked with current date
      return true;
    }
    return false;
  }
}
