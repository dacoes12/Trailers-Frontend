import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { generoDTO } from '../models/generoDTO';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceGeneroService {

  urlPath = 'api/genero';

  constructor(private httClient: HttpClient) {

  }

  getAllGeneros(){
    return this.httClient.get<generoDTO[]>(this.urlPath+"/all").pipe(
      catchError(
        err => {
          console.log("Error al obtener todos los generos")
          return throwError(err);
        }
      )
    )
  }


}
