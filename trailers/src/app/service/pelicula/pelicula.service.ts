import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Page } from 'src/app/models/page';
import { peliculaDTO } from 'src/app/models/peliculaDTO';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  urlPath = 'api/pelicula';

  constructor(private httCliente:HttpClient) { }

  save(pelicula:peliculaDTO){
    return this.httCliente.post(this.urlPath,pelicula);
  }

  getPeliculas(pageNumber:number,pageSize:number){
    return this.httCliente.get<Page>(this.urlPath+'/all?pageNumber='+pageNumber+'&pageSize='+pageSize).pipe(
      catchError(
        err => {
          console.log("Error al obtener todas las peliculas")
          return throwError(err);
        }
      )
    )
  }

  getPelicula(id:number){
    return this.httCliente.get<peliculaDTO>(this.urlPath+'/'+id).pipe(catchError(
      err => {
        console.log("Error al obtener todas las peliculas")
        return throwError(err);
      }
    )
    )
  }


}
