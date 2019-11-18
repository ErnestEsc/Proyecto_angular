import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoricoComponent } from './historico/historico.component';
import { CosasComponent } from './cosas/cosas.component';
import { ColegasComponent } from './colegas/colegas.component';
import { EventosComponent } from './eventos/eventos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoricoComponent,
    CosasComponent,
    ColegasComponent,
    EventosComponent,
    PerfilComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
