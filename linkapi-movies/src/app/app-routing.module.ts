import { NgModule } from '@angular/core';
import { CadastroPerfilComponent } from './screens/cadastro-perfil/cadastro-perfil.component'; 
import { UiComponentsComponent } from './screens/ui-components/ui-components.component'; 
import { MoviesFeedComponent } from './screens/movies-feed/movies-feed.component'; 
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'cadastro-perfil', component: CadastroPerfilComponent },
  { path: 'ui-components', component: UiComponentsComponent },
  { path: 'movies-feed', component: MoviesFeedComponent },
  { path: '', redirectTo: '/cadastro-perfil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
