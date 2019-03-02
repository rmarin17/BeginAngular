import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  // Componentes, Pipes o Directivas que son visibles en el modulo
  declarations: [
    AppComponent, ToolbarComponent, CardComponent
  ],
  // Importamos Modulos
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // Servicio (Singleton: clase que solo tiene una instancia "Inyecta todo en donde se necesita") visibles en el modulo
  providers: [],
  //  Componente que se ejecuta primero
  bootstrap: [AppComponent],
  // Componentes, Pipes, directiva o Servicios se pueden exportar
  exports: []
})
export class AppModule { }
