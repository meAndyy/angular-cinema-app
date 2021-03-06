import { Component } from '@angular/core';
import { Movie } from './movie';
import { Cinema } from './cinema';

const MOVIES: Movie[] = [
  {id: 111, name: 'Pulp Fiction', director: 'Quentin Tarintino', cast:'Bruce Willis,Samuel L. Jackson'},
    {id: 112, name: 'Fight Club', director: 'Bryan Singer', cast:'Ed Norton, Brad Pitt'},
    {id: 113, name: 'Saving Private Ryan', director: 'Steven Spielberg', cast:"Tom Hanks, Vin Diesel"},
    {id: 114, name: 'Dark Knight Rising', director: 'Chrsitopher Nolan', cast: "Christian Bale, Heath Ledger"},
];

const CINEMAS: Cinema[] = [
  {id: 111, name: 'VUE Liffey Valley'},
    {id: 112, name: 'IMC Tallaght'},
    {id: 113, name: 'ODEON The Point'},
    {id: 114, name: 'Savoy'},
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Cinemas</h2>
    <ul class="heroes">
      <li *ngFor="let cinema of cinemas"
        [class.selected]="cinema === selectedCinema"
        (click)="onSelect1(cinema)">
        <span class="badge">{{cinema.id}}</span> {{cinema.name}}
      </li>
    </ul>
    
    <div *ngIf="selectedCinema">
    <h2>Movies</h2>
      <ul class="heroes">
      <li *ngFor="let movie of movies"
        [class.selected]="movie === selectedMovie"
        (click)="onSelect(movie)">
        <span class="badge">{{movie.id}}</span> {{movie.name}}
      </li>
      </ul>
    </div>
    <my-movie-detail [movie]="selectedMovie"></my-movie-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'My Movie App';
  movies = MOVIES;
  selectedMovie: Movie;

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  cinemas = CINEMAS;
  selectedCinema: Cinema;

  onSelect1(cinema: Cinema): void {
    this.selectedCinema = cinema;
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/