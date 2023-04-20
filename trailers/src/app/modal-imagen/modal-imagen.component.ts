import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-imagen',
  templateUrl: './modal-imagen.component.html',
  styleUrls: ['./modal-imagen.component.css']
})
export class ModalImagenComponent {

  imagenPreview :any;

  constructor(@Inject(MAT_DIALOG_DATA) public imagen:any){
    this.imagenPreview = URL.createObjectURL(imagen);
  }
}
