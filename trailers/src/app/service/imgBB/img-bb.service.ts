import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImgBBService {

  apiKey:string='fa2b0f62720a5b75e8a6422e4b7985c2'
  url:string='https://api.imgbb.com/1'

  constructor(private httpClient: HttpClient) { }

  cargarImagen(file:File):Observable<Object>{
    const formData = new FormData();

    formData.append('image',file);

    return this.httpClient.post('upload',formData,{params:{key:this.apiKey} })

  }
}
