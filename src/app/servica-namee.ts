import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ServicaNamee {
  constructor (private http: HttpClient) { }
  getproducts() {
    return this.http.get('https://dummyjson.com/recipes');
}
}