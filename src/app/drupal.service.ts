import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DrupalService {
  private apiUrl = 'http://localhost:8080/api/formulario'; // Usa la ruta de proxy aquí

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching data from API:', error);
        throw error; // Rethrow the error for further handling
      })
    );
  }
}


