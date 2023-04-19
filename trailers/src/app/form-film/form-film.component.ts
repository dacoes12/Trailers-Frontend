import { Component, OnInit } from '@angular/core';
import { peliculaDTO } from '../models/peliculaDTO';
import { ServiceGeneroService } from '../service/service-genero.service';
import { generoDTO } from '../models/generoDTO';
import { ImgBBService } from '../service/imgBB/img-bb.service';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-form-film',
  templateUrl: './form-film.component.html',
  styleUrls: ['./form-film.component.css']
})
export class FormFilmComponent implements OnInit{
  pelicula !: peliculaDTO;
  generos : generoDTO[] = [];
  generosFilm : generoDTO[] = [];

  constructor(private serviceGenero:ServiceGeneroService, private imgBBService: ImgBBService){
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
    const index = this.pelicula.generos.indexOf(this.pelicula.generos.filter(Element => item.id == Element.id)[0])
    console.log(index)
    if (index >= 0) {
      this.pelicula.generos.splice(index, 1);
    }
  }
  filmGeneros(event:any,selectGenero:generoDTO){
    const index = this.pelicula.generos.indexOf(this.pelicula.generos.filter(Element => selectGenero.id == Element.id)[0])
    if (index >= 0) {
      console.log("Ya se encuentra registrado")
    }else{
      this.pelicula.generos.push(selectGenero)
    }
  }

  capturarImg(event: any){
    const input = event.target as HTMLInputElement;
    console.log(input.files)
    this.imgBBService.cargarImagen(input.files![0]).subscribe((response) =>
      this.pelicula.urlPortada = response
    );

  }

  savePelicula(){
    console.log(this.pelicula)
  }

}
