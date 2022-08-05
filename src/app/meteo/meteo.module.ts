import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeteoComponent } from './components/meteo/meteo.component';
import { SharedModule } from '../shared/shared.module';
import { MeteoService } from './service/meteo.service';
import { MeteoRoutingModule } from './meteo-routing.module';

@NgModule({
  declarations: [
    MeteoComponent
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
