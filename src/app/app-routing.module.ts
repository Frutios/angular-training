import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'meteo', loadChildren: () => import('./meteo/meteo.module').then(m => m.MeteoModule)},
  { path: '**', redirectTo: 'meteo'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
