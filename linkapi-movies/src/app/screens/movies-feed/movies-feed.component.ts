import { MovieService } from '../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-movies-feed',
  templateUrl: './movies-feed.component.html',
  styleUrls: ['./movies-feed.component.scss']
})
export class MoviesFeedComponent implements OnInit {
  label = ""
  lblPlaceholder = "Search movies, actors or genre"
  style = {
    border: "none",
    margin: "0 0 5px 10px"
  }
  filterState = "Favorites"
  movieCards;

  constructor(public movieService: MovieService) { }

  getMovies() {
    this.movieService.getAllMovies().subscribe((movies: any[]) => {
      this.movieCards = movies;
    })
  }

  async ngOnInit() {
    this.getMovies();
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(this.movieCards)
  }



}
