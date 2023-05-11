import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  //put in the api link
  getData():Observable<any>{
    return this.http.get('https://swapi.dev/api/films/')
  }
}
