import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';


import { AppMain } from './components/main/main';
import { AppHeader } from './components/header/header';
import { AppFooter } from './components/footer/footer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppMain,
    AppHeader,
    AppFooter
  ],
  providers: [
  ],
  bootstrap: [ AppMain ]
})
export class AppModule {
}