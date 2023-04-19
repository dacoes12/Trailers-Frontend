import { generoDTO } from "./generoDTO";

export class peliculaDTO{
  id?: number;
  titulo?:string;
  sinopsis?:string;
  youtubeTrailerId?:string;
  fechaEstreno?: Date;
  generos :generoDTO[] = [];
  urlPortada ?: string;


  constructor(){

  }

  // constructor(id:number,tiutulo:string,sinopsis:string,
  //   youtubeTrailer:string,fechaEstreno:Date){
  //   this.id = id;
  //   this.titulo = tiutulo;
  //   this.sinopsis = sinopsis;
  //   this.youtubeTrailerId = youtubeTrailer;
  //   this.fechaEstreno = fechaEstreno;
  // }
}
