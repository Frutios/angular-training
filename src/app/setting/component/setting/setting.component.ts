import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'at-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  constructor(private translateService: TranslateService, private router: Router) { }

  ngOnInit(): void {
  }

  stockAndChangeLanguage() {
    if (this.translateService.currentLang === "fr") {
      sessionStorage.setItem('Language', 'en')
    } else {
      sessionStorage.setItem('Language', 'fr')
    }
    this.translateService.use(sessionStorage.getItem('Language')!)
  }
}
