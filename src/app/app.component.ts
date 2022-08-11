import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'at-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor(translate: TranslateService){
  translate.addLangs(['fr', 'en'])
  translate.setDefaultLang('en');
  translate.use(sessionStorage.getItem('Language')!)
 }
}
