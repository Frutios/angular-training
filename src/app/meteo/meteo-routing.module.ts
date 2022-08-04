import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeteoComponent } from './components/meteo/meteo.component';

const routes: Routes = [
  {path: '', component: MeteoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeteoRoutingModule { }
