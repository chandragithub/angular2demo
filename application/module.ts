import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';


import { AppMain } from './components/main/main';
import { AppHeader } from './components/header/header';
import { AppFooter } from './components/footer/footer';
import { AppDashboard } from './components/dashboard/dashboard';
import { routing } from './routing/routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppMain,
    AppHeader,
    AppFooter,
    AppDashboard
  ],
  providers: [
  ],
  bootstrap: [ AppMain ]
})
export class AppModule {
}