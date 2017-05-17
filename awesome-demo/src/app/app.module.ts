import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { ToggleItModule, ToggleItService } from 'ng2-toggle-it';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RewardComponent } from './reward/reward.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RewardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ToggleItModule,
    RouterModule.forRoot([
      { path: '', component: RewardComponent },
      { path: 'toggle-dashboard', component: DashboardComponent }
    ]),
  ],
  providers: [
    ToggleItService,
    { provide: APP_BASE_HREF, useValue: environment.baseHref },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
