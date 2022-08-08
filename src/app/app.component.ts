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
  if (sessionStorage.getItem === null) {
    sessionStorage.setItem("Language", translate.getBrowserLang()!)
  }
  const browserLang = translate.getBrowserLang()!
  translate.use(browserLang.match(/en|fr/) ? browserLang : 'en')
 }
}
