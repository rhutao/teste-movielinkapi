import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  id;
  private sub: any;
  movieCards: any[] = [];
  movieInfo: any[] = [];

  constructor(private router: Router,private route: ActivatedRoute, public movieService: MovieService, private spinner: NgxSpinnerService) { 
    this.route.params.subscribe( params => console.log(params) );
  }

  goPerfil() {
    this.router.navigate(['/cadastro-perfil']);
  }

  goMovies() {
    this.router.navigate(['/movies-feed']);
  }
  
  getMovies() {
    this.movieService.getAllMovies().subscribe((movies: any[]) => {
      this.movieCards = movies;
    })
  }

  async ngOnInit() {
    this.spinner.show();
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });
    this.getMovies();
    await new Promise(resolve => setTimeout(resolve, 1500));
    this.spinner.hide();  
    for(var i in this.movieCards) {
      if(this.id == i){
      this.movieInfo.push(this.movieCards[i]);
      }
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
