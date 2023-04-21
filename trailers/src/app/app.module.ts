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


const routes: Routes = [
  {path:'', redirectTo:'/register', pathMatch: 'full'},
  {path:'register', component: FormFilmComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormFilmComponent,
    FilmCardComponent,
    ModalCardComponent,
    ModalImagenComponent
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
