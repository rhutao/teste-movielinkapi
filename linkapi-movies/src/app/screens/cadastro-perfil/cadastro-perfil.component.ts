import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cadastro-perfil',
  templateUrl: './cadastro-perfil.component.html',
  styleUrls: ['./cadastro-perfil.component.scss']
})
export class CadastroPerfilComponent implements OnInit {

  label = ["Name", "Age", "Favorite Movie", "Favorite Genre"]
  constructor(private router: Router) { }

  goMovies() {
    this.router.navigate(['/movies-feed']);
  }

  ngOnInit() {
  }
}
