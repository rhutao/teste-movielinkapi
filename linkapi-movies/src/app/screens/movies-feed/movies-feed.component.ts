import { MovieEntity } from './../../entities/movie-entity';
import { MovieService } from '../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-movies-feed',
  templateUrl: './movies-feed.component.html',
  styleUrls: ['./movies-feed.component.scss'],
  
})
export class MoviesFeedComponent implements OnInit {
  label = ""
  lblPlaceholder = "Search movies, actors or genre"
  style = {
    border: "none",
    margin: "0 0 5px 10px"
  }
  filterState = "Favorites"
  movieCards: MovieEntity[] = [];
  favMovie: MovieEntity[] = [];
  term: string;

  constructor(public movieService: MovieService, private router: Router) { }
  
  getMovies() {
    this.movieService.getAllMovies().subscribe((movies: any[]) => {
      this.movieCards = movies;
    })
  }

  goPerfil() {
    this.router.navigate(['/cadastro-perfil']);
  }

  changeState() {
    if(this.filterState == "List All") {
      this.filterState = "Favorites";
    }else if (this.filterState == "Favorites") {
      this.filterState = "List All"
    }
  }

  async ngOnInit() {
    this.getMovies();
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(this.movieCards)
  }
  public isChangedBlock = {};

  removeFav(i) {
    console.log(this.movieCards[i])
    this.favMovie.splice(i,1);
    console.log(this.favMovie);
  }

  addFav(i) {
    console.log(this.movieCards[i])
    this.favMovie.push(this.movieCards[i]);
    console.log(this.favMovie);
  }

}
