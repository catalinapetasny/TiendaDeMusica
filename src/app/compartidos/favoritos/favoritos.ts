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

  constructor(
    private favoritosService: favoritosService
  ) {
    this.favoritos =
      this.favoritosService.obtenerFavoritos();
  }

  eliminarProductos(p: Producto) {
    this.favoritosService.eliminarProductos(p);

    this.favoritos = this.favoritosService.obtenerFavoritos();
  }

}