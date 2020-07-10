import { MovieEntity } from './../../entities/movie-entity';
import { MovieService } from '../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { StorageService } from '../../services/storage.service';

const movieListStorageKey = 'Movie';

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
  movieList: MovieEntity[] = [];
  favMovie: MovieEntity[] = [];
  term: string;
  public isChangedBlock = {};

  movieName;

  constructor(public movieService: MovieService, private router: Router, private spinner: NgxSpinnerService, private storageService: StorageService) { 
    this.movieList = 
    storageService.getData(movieListStorageKey) || this.movieCards;
  }

  goPerfil() {
    this.router.navigate(['/cadastro-perfil']);
  }

  changeState() {
    if(this.filterState == "List All") {
      this.filterState = "Favorites";
    }else if (this.filterState == "Favorites") {
      this.filterState = "List All";
    }
  }

  async ngOnInit() {
    this.spinner.show();
    this.getMovies();
    await new Promise(resolve => setTimeout(resolve, 1500));
    this.spinner.hide();
    console.log(this.movieCards);
  }

  removeFav(i) {
    console.log(this.movieCards[i]);
    for(var x = 0; x <= this.favMovie.length; x++ ) {
      if(this.favMovie[x] == this.movieCards[i]) {
        console.log(this.favMovie[x]);
        this.favMovie.splice(x, 1);
      }
    }

    // for(var e in this.favMovie) {
    //   if(this.movieCards[i] == this.favMovie[e]) {
    //     var x = parseInt(e)
    //     this.favMovie.splice(x, 1);
    //     break;
    //   } else {
    //     break
    //   }
    // }
    console.log(this.favMovie);
  }

  addFav(i) {
    for(var e in this.movieCards) {
      if(this.movieCards[e] == this.movieCards[i]) {
        this.favMovie.push(this.movieCards[i]);
        break;
      }
    }
    console.log(this.movieCards[i]);
    // for(var e in this.movieCards) {
    //   if(this.movieCards[i] == this.favMovie[e]){
    //     break;
    //   }else {
    //     this.favMovie.push(this.movieCards[i]);
    //     break;
    //   }
    // }
    // this.favMovie.push(this.movieCards[i]);
    console.log(this.favMovie);
  }

  addItem(item: MovieEntity) {
    this.movieList.push(item);
    this.storageService.setData(movieListStorageKey, this.movieCards);
  }

  updateItem(item: MovieEntity, changes) {
    const index = this.movieList.indexOf(item);
    this.movieList[index] = { ...item, ...changes };
    this.storageService.setData(movieListStorageKey, this.movieList);
  }

  saveList() {
    this.storageService.setData(movieListStorageKey, this.movieList);
  }
  
  deleteItem(item: MovieEntity) {
    const index = this.movieList.indexOf(item);
    this.movieList.splice(index, 1);
    this.saveList();
  }

  getMovies() {
    this.movieService.getAllMovies().subscribe((movies: any[]) => {
      this.movieCards = movies;
    })
  }
}
