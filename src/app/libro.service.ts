import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from './LIbro';
import { HttpHeaders } from '@angular/common/http';
const BASE_URL = "https://misiontic22.herokuapp.com/api"

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Libro[]>(`${BASE_URL}/list`);
  }

  create(libro: Libro) {
    return this.http.post(`${BASE_URL}/create`, libro)
  }

  update(libro: Libro) {
    return this.http.put(`${BASE_URL}/update/${libro._id}`, libro)
  }

  remove(libroId: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.delete(`${BASE_URL}/remove/${libroId}`, httpOptions)
  }
}
