import { Component } from '@angular/core';
import { MenuService, Menu } from './services/menu.service';

@Component({
  // La etiqueta para usar el componente
  selector: 'app-root',
  // La ruta del archivo template
  templateUrl: './app.component.html',
  // Las rutas de los archivos de estilos
  styleUrls: ['./app.component.css'],
  // Servicios disponibles a partir de este nivel (de ahí pa abajo)
  providers: [],
  // Template del componente
  // template: '<p> Hola </p>' es exclusivo con templateURL
})
export class AppComponent {
  title = 'app';
  data: Menu[] = [];

  constructor(service: MenuService) {
    service.loadMenu()
      .subscribe(x => this.data = x);
  }
}
