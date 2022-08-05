import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Meteo } from '../../models/meteo.model';
import { MeteoService } from '../../service/meteo.service';

@Component({
  selector: 'at-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {

  meteo$!: Observable<Meteo>
  startDate!: string 
  endDate!: string

  constructor(private meteoService: MeteoService) { }


  ngOnInit(): void {
    this.meteoService.getMeteo(moment().format("YYYY-MM-DD"), moment().add(7).format("YYYY-MM-DD"))
    this.initObservable()
  }

  initObservable() {
    this.meteo$ = this.meteoService.meteo$
  }

  sendDates(){
    this.meteoService.getMeteo(this.startDate, this.endDate)
  }
}
