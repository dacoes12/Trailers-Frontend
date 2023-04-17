import { Component, OnInit } from '@angular/core';
import { peliculaDTO } from '../models/peliculaDTO';
import { ServiceGeneroService } from '../service/service-genero.service';
import { generoDTO } from '../models/generoDTO';

@Component({
  selector: 'app-form-film',
  templateUrl: './form-film.component.html',
  styleUrls: ['./form-film.component.css']
})
export class FormFilmComponent implements OnInit{
  pelicula !: peliculaDTO;
  generos : generoDTO[] = [];
  generosFilm : generoDTO[] = [];

  constructor(private serviceGenero:ServiceGeneroService){
    this.pelicula = new peliculaDTO();
  }

  ngOnInit(): void {
    this.serviceGenero.getAllGeneros().subscribe(
      response => {
        this.generos = response as generoDTO[];
        console.log(this.generos);
      }
    )

  }

  removeGenero(item:generoDTO){
    const index = this.generosFilm.indexOf(item);
    if (index >= 0) {
      this.generosFilm.splice(index, 1);
    }
  }
  filmGeneros(event:any,selectGenero:generoDTO){
    const index = this.generosFilm.indexOf(selectGenero);
    if (index >= 0) {
      console.log("Ya se encuentra registrado")
    }else{
      this.generosFilm.push(selectGenero)
    }
  }

  savePelicula(){
    console.log(this.pelicula);
  }

  capturarImg(event: any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log(reader.result);
    };
  }
}
