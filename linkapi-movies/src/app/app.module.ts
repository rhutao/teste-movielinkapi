import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroPerfilComponent } from './screens/cadastro-perfil/cadastro-perfil.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { UiComponentsComponent } from './screens/ui-components/ui-components.component';
import { MoviesFeedComponent } from './screens/movies-feed/movies-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MovieDetailsComponent } from './screens/movie-details/movie-details.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroPerfilComponent,
    InputsComponent,
    UiComponentsComponent,
    MoviesFeedComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
