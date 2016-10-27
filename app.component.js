"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var movie_service_1 = require('./movie.service');
var CINEMAS = [
    { id: 111, name: 'VUE Liffey Valley' },
    { id: 112, name: 'IMC Tallaght' },
    { id: 113, name: 'ODEON The Point' },
    { id: 114, name: 'Savoy' },
];
var AppComponent = (function () {
    function AppComponent(movieService) {
        this.movieService = movieService;
        this.title = 'My Movie App';
        this.cinemas = CINEMAS;
    }
    AppComponent.prototype.getMovies = function () {
        var _this = this;
        this.movieService.getMovies().then(function (movies) { return _this.movies = movies; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    AppComponent.prototype.onSelect = function (movie) {
        this.selectedMovie = movie;
    };
    AppComponent.prototype.onSelect1 = function (cinema) {
        this.selectedCinema = cinema;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>Cinemas</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"let cinema of cinemas\"\n        [class.selected]=\"cinema === selectedCinema\"\n        (click)=\"onSelect1(cinema)\">\n        <span class=\"badge\">{{cinema.id}}</span> {{cinema.name}}\n      </li>\n    </ul>\n    \n    <div *ngIf=\"selectedCinema\">\n    <h2>Movies</h2>\n      <ul class=\"heroes\">\n      <li *ngFor=\"let movie of movies\"\n        [class.selected]=\"movie === selectedMovie\"\n        (click)=\"onSelect(movie)\">\n        <span class=\"badge\">{{movie.id}}</span> {{movie.name}}\n      </li>\n      </ul>\n    </div>\n    <my-movie-detail [movie]=\"selectedMovie\"></my-movie-detail>\n  ",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .heroes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .heroes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .heroes .text {\n      position: relative;\n      top: -3px;\n    }\n    .heroes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "],
            providers: [movie_service_1.MovieService]
        }), 
        __metadata('design:paramtypes', [movie_service_1.MovieService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map