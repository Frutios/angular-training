import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Meteo } from '../../models/meteo.model';

@Component({
  selector: 'at-sun',
  templateUrl: './sun.component.html',
  styleUrls: ['./sun.component.scss']
})
export class SunComponent implements OnInit {

  @Input() meteo$!: Observable<Meteo>
  constructor() { }

  ngOnInit(): void {
  }

}
