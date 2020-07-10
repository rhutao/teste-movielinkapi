import { Injectable } from '@angular/core';
import { MovieEntity } from '../entities/movie-entity';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { StorageService } from '../services/storage.service';

const movieListStorageKey = 'Movie';
@Injectable({
  providedIn: 'root'
})

export class MovieService {
  url = "https://api-movies.gateway.linkapi.solutions/v1/movies";

  getAllMovies(): Observable<MovieEntity[]> {
    return this.http.get<MovieEntity[]>(this.url)
    .pipe(
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.message;
    } else {
      errorMessage = 'Codigo do erro: $(error.status), ' + 'menssagem: $(error.message}';
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  constructor(private http: HttpClient,private storageService: StorageService) { 
    // storageService.getData(movieListStorageKey) || this.movieCards;
  }

  // addItem(item: MovieEntity) {
  //   this.movieList.push(item);
  //   this.storageService.setData(movieListStorageKey, this.movieCards);
  // }

  // updateItem(item: MovieEntity, changes) {
  //   const index = this.movieList.indexOf(item);
  //   this.movieList[index] = { ...item, ...changes };
  //   this.storageService.setData(movieListStorageKey, this.movieList);
  // }

  // saveList() {
  //   this.storageService.setData(todoListStorageKey, this.todoList);
  // }
}
