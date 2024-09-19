import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de rutas

@NgModule({

  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule, // Importa el módulo de rutas
  ],
  providers: [],
  bootstrap: [AppComponent] // Componente principal de arranque
})
export class AppModule { }