import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Meteo } from '../models/meteo.model';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }

  private _meteo$ = new BehaviorSubject<Meteo>({daily: {temperature_2m_min: [], temperature_2m_max: []}, daily_units: {temperature_2m_min:'', temperature_2m_max: ''}})
  get meteo$(): Observable<Meteo> {
    return this._meteo$.asObservable()
  }

  getMeteo(startDate: string, endDate: string) {
    this.http.get<Meteo>(`https://api.open-meteo.com/v1/forecast?latitude=47.39&longitude=0.72&timezone=UTC&daily=temperature_2m_max,temperature_2m_min&start_date=${startDate}&end_date=${endDate}`).pipe(
      tap(meteo => this._meteo$.next(meteo)),
    ).subscribe()
  }
}
