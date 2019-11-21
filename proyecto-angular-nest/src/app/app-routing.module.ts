import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CosasComponent } from "./cosas/cosas.component";
import { ColegasComponent } from "./colegas/colegas.component";
import { HistoricoComponent } from "./historico/historico.component";
import { EventosComponent } from "./eventos/eventos.component";
import { NotfoundComponent } from "./notfound/notfound.component";


const routes: Routes = [
  {path: '', redirectTo: 'historico', pathMatch: 'full'},
  {path: 'home', component: AppComponent},
  {path: 'cosas', component: CosasComponent},
  {path: 'colegas', component: ColegasComponent},
  {path: 'historico', component: HistoricoComponent},
  {path: 'eventos', component: EventosComponent},
  {path: '**', component: NotfoundComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
