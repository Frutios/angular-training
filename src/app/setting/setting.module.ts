import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './component/setting/setting.component';
import { SharedModule } from '../shared/shared.module';
import { SettingRoutingModule } from './setting-routing.module';

@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
