// favoritos.ts (COMPONENTE)

import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { favoritosService } from '../../servicios/favoritos';

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})

export class Favoritos {

  favoritos: Producto[] = [];
  // el constructor conecta el componente con el servicio
  constructor(
    private favoritosService: favoritosService
  ) {
    this.favoritos = this.favoritosService.obtenerFavoritos();
  }

  eliminarProductos(p: Producto) {
    this.favoritosService.eliminarProductos(p); // Llama al servicio para eliminarlo
    this.favoritos = this.favoritosService.obtenerFavoritos(); //Actualiza la lista mostrada
  }

}