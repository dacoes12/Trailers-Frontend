import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.css']
})
export class ModalVideoComponent {
  idYoutube:string;

  playerVars = {
    origin: 'http://localhost:4200',
    autoplay: 1, enablejsapi: 1
  };

  constructor(@Inject(MAT_DIALOG_DATA) private url:string,private sanitizer: DomSanitizer){
    this.idYoutube = url;
  }

}
