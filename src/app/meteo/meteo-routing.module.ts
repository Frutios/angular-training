import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeteoComponent } from './components/meteo/meteo.component';
import { SunComponent } from './components/sun/sun.component';

const routes: Routes = [
  {path: '', component: MeteoComponent },
  {path: 'sun', component: SunComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeteoRoutingModule { }
