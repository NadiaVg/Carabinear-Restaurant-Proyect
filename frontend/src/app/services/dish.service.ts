import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Dish } from '../interfaces/dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {


  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
  }

  endPoint = "http://localhost:8080/api/dishes"
  
  constructor(private  httpClient:  HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  } 
  
  getDishes(){
    return this.httpClient.get<Dish[]>(this.endPoint)
  }

  getOneDish(id: number) {
    return this.httpClient.get<Dish>(this.endPoint + '/' + id)
    .pipe(
      tap(_=> console.log(`Dish fetched: ${id}`)),
      catchError(this.handleError<Dish>(`Get Dish id=${id}`))
    );
  }

  getDishesByRestaurantId(id: number){
    return this.httpClient.get<Dish[]>(this.endPoint + "/restaurant/" + id)
  }


  createDish(dish, blob){
    console.log(dish)
    let formData = new FormData();
    formData.append("name", dish.name);
    formData.append("file", blob);
    formData.append("restaurantId", dish.restaurantId);

    return this.httpClient.post(this.endPoint, formData)
  }

  deleteDish(id){
    return this.httpClient.delete<Dish>(this.endPoint + '/' + id)
    .pipe(
      tap(_=> console.log(`Dish deleted ${id}`)),
      catchError(this.handleError<Dish>(`Delete Dish`))
    )
  }

  updateDish(id, dish, blob, restaurantId){
    let data = new FormData();

    data.append("name", dish.name);
    data.append("file", blob);
    data.append("restaurantId", restaurantId)

    return this.httpClient.put(this.endPoint + '/' + id, data)
  }


}
