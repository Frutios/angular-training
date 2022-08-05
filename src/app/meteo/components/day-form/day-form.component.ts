import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import moment from 'moment';
import { MeteoService } from '../../service/meteo.service';

@Component({
  selector: 'at-day-form',
  templateUrl: './day-form.component.html',
  styleUrls: ['./day-form.component.scss']
})
export class DayFormComponent implements OnInit {

  @Output() endDate = new EventEmitter<string>();
  @Output() startDate = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartDateChange(value: string){    
    this.startDate.emit(moment(value).format('YYYY-MM-DD')) 
  }

  onEndDateChange(value: string){
    this.endDate.emit(moment(value).format('YYYY-MM-DD'))
  }
}
