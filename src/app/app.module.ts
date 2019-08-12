import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { HeroesService } from './services/heroes.service'

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroComponent } from './components/hero/hero.component';
import { FindHeroComponent } from './components/find-hero/find-hero.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import localeDeAt from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';



registerLocaleData(localeDeAt);
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroComponent,
    FindHeroComponent,
    HeroCardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService,
    { provide: LOCALE_ID, useValue: "es-CO" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
