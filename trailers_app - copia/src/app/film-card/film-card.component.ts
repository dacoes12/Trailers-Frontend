import { Component, Input } from '@angular/core';
import { peliculaDTO } from '../models/peliculaDTO';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent {
  @Input('pelicula') pelicula !: peliculaDTO;

  constructor(){
    console.log(this.pelicula);
  }
}
