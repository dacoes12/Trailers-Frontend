import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../service/pelicula/pelicula.service';
import { peliculaDTO } from '../models/peliculaDTO';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit{

  peliculas:peliculaDTO[];
  length = 50;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5 ,10, 20, 25];

  constructor(private peliculaService:PeliculaService){
    this.peliculas = [];
  }
  ngOnInit(): void {
    this.getListFilms(this.pageIndex,this.pageSize);
  }

  getListFilms(pI:number,pS:number){
    this.peliculaService.getPeliculas(pI,pS).subscribe( response =>{
      this.peliculas = response.content;
      this.length = response.totalElements;
      console.log(response)
    });
  }

  handlePageEvent(event:PageEvent){
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.length = event.length;
    this.getListFilms(this.pageIndex,this.pageSize)
  }
}
