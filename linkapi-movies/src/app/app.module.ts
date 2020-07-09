import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroPerfilComponent } from './screens/cadastro-perfil/cadastro-perfil.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { UiComponentsComponent } from './screens/ui-components/ui-components.component';
import { MoviesFeedComponent } from './screens/movies-feed/movies-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    CadastroPerfilComponent,
    InputsComponent,
    UiComponentsComponent,
    MoviesFeedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
