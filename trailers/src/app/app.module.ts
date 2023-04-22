import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormFilmComponent } from './form-film/form-film.component';
import { FilmCardComponent } from './film-card/film-card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { ModalCardComponent } from './modal-card/modal-card.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { ModalImagenComponent } from './modal-imagen/modal-imagen.component';
import { RouterModule, Routes } from '@angular/router';
import { FilmsListComponent } from './films-list/films-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FilmViewComponent } from './film-view/film-view.component';
import { ModalVideoComponent } from './modal-video/modal-video.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';


const routes: Routes = [
  {path:'', redirectTo:'/view', pathMatch: 'full'},
  {path:'filmslist', component: FilmsListComponent},
  {path:'register', component: FormFilmComponent},
  {path:'prueba', component: FilmCardComponent},
  {path:'view', component: FilmViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormFilmComponent,
    FilmCardComponent,
    ModalCardComponent,
    ModalImagenComponent,
    FilmsListComponent,
    FilmViewComponent,
    ModalVideoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatPaginatorModule,
    NgxYoutubePlayerModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
