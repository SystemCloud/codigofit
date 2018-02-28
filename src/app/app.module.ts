import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { app_routing } from './app.routes';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/super/dashboard/dashboard.component';
import { MainComponent } from './components/super/main/main.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
