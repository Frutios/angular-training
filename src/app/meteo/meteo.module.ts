import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeteoComponent } from './components/meteo/meteo.component';
import { SharedModule } from '../shared/shared.module';
import { MeteoService } from './service/meteo.service';
import { MeteoRoutingModule } from './meteo-routing.module';
import { SunComponent } from './components/sun/sun.component';
import { DayFormComponent } from './components/day-form/day-form.component';
import { HeatWaveComponent } from './components/heat-wave/heat-wave.component';

@NgModule({
  declarations: [
    MeteoComponent,
    SunComponent,
    DayFormComponent,
    HeatWaveComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MeteoRoutingModule, 
  ],
  providers: [
    MeteoService,
  ],
})
export class MeteoModule { }
