import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ResponseImg } from 'src/app/models/response';


@Injectable({
  providedIn: 'root'
})
export class ImgBBService {

  apiKey:string='fa2b0f62720a5b75e8a6422e4b7985c2'
  url:string='https://api.imgbb.com/1'

  constructor(private httpClient: HttpClient) { }

  cargarImagen(file:File){
    const formData = new FormData();

    formData.append('image',file);

    return this.httpClient.post<ResponseImg>('upload',formData,{params:{key:this.apiKey} }).pipe(map(response => response.data.url))

  }
}
