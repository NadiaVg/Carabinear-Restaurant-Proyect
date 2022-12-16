import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DishService {


  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  endPoint = "http://localhost:8080/api/dishes"
  
  constructor(private  httpClient:  HttpClient, private  storage:  Storage) { }


}
