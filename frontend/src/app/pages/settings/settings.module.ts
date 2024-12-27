import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { StatusComponent } from './components/status/status.component';
import { PriorityComponent } from './components/priority/priority.component';
import { IdNameManagerComponent } from './components/id-name-manager/id-name-manager.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SettingsComponent,
    StatusComponent,
    PriorityComponent,
    IdNameManagerComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ReactiveFormsModule
  ]
})
export class SettingsModule { }
