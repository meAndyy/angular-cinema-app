import { Component, Input } from '@angular/core';
import { Movie } from './movie';
@Component({
  selector: 'my-movie-detail',
  template: `
    <div *ngIf="movie">
      <h2>{{movie.name}}</h2>
      <h3>A {{movie.director}} Film</h3>
      <h3>Starring {{movie.cast}}</h3>
      <div><label>id: </label>{{movie.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="movie.name" placeholder="name"/>
      </div>
      </div>
  `
})
export class MovieDetailComponent {
  @Input()
  movie: Movie;
}