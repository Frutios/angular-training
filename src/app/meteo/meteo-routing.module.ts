import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeatWaveComponent } from './components/heat-wave/heat-wave.component';
import { MeteoComponent } from './components/meteo/meteo.component';
import { SunComponent } from './components/sun/sun.component';

const routes: Routes = [
  {path: '', component: MeteoComponent },
  {path: 'sun', component: SunComponent },
  {path: 'heat-wave', component: HeatWaveComponent, canActivate: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeteoRoutingModule { }
