import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaConsiderarComponent } from './mapa-considerar/mapa-considerar.component';
import { MapaComponent } from './mapa/mapa.component';
import { MapaCompetidoresComponent } from './mapaCompetidores/mapaCompetidores.component';

const routes: Routes = [
  
  {
    path: 'Locaciones',
    component: MapaComponent
  },

  {
    path: 'Competidores',
    component: MapaCompetidoresComponent
  },
  {

    path: 'schools',
    component: MapaConsiderarComponent

  },
  {
    path: '**',
    redirectTo: 'Locaciones'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
