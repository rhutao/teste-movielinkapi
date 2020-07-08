import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroPerfilComponent } from './screens/cadastro-perfil/cadastro-perfil.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { UiComponentsComponent } from './screens/ui-components/ui-components.component';
import { MoviesFeedComponent } from './screens/movies-feed/movies-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroPerfilComponent,
    InputsComponent,
    UiComponentsComponent,
    MoviesFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
