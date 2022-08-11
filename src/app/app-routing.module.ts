import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  { path: 'meteo', loadChildren: () => import('./meteo/meteo.module').then(m => m.MeteoModule)},
  { path: 'setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule)},
  { pathMatch: 'full', path: '', redirectTo: 'meteo'},
  { path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
