import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { peliculaDTO } from 'src/app/models/peliculaDTO';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private httCliente:HttpClient) { }

  save(pelicula:peliculaDTO){
    return this.httCliente.post('/api/pelicula',pelicula);
  }
}
