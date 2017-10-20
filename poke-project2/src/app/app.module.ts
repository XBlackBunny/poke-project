import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { PokemonService } from './pokemon/pokemon.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonSearchComponent } from './searchPokemon/pokemon-search.component';
import {PokemonComponent} from './pokemon/pokemon.component';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    RoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PokemonSearchComponent,
    PokemonComponent
  ],
  bootstrap:    [
    AppComponent
  ],
  providers:    [
    PokemonService
  ],
})
export class AppModule { }
