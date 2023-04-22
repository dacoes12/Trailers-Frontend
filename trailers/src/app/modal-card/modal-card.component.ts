import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { peliculaDTO } from '../models/peliculaDTO';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.css']
})
export class ModalCardComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public pelicula:peliculaDTO){

  }
}
