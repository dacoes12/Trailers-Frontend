import { Component, Input } from '@angular/core';
import { peliculaDTO } from '../models/peliculaDTO';
import { PeliculaService } from '../service/pelicula/pelicula.service';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ModalVideoComponent } from '../modal-video/modal-video.component';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})
export class FilmViewComponent {
  @Input('id') id!:number;
  pelicula!:peliculaDTO;

  constructor(private service:PeliculaService,private dialog:MatDialog){
    //this.service.getPelicula(this.id);
   this.service.getPelicula(12).subscribe(response =>{
      this.pelicula = response;
    });
  }

  openTrailer(){
    this.dialog.open(ModalVideoComponent,{data:this.pelicula.youtubeTrailerId})
  }


}
