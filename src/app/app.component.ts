import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'at-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor(translate: TranslateService){
  translate.setDefaultLang('fr')
  if (sessionStorage.getItem === null) {
    sessionStorage.setItem("Language", "fr")
  }
  translate.use(sessionStorage.getItem("Language")!)
 }
}
