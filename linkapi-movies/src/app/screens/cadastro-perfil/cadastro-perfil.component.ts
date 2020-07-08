import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cadastro-perfil',
  templateUrl: './cadastro-perfil.component.html',
  styleUrls: ['./cadastro-perfil.component.scss']
})
export class CadastroPerfilComponent implements OnInit {

  label = ["Name", "Age", "Favorite Movie", "Favorite Genre"]
  constructor() { }

  ngOnInit() {
  }

}
