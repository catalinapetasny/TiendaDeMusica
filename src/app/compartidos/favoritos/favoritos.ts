// favoritos.ts (COMPONENTE)

// import { Component } from '@angular/core';
// import { Producto } from '../../models/producto';
// import { favoritosService } from '../../servicios/favoritos';

// @Component({
//   selector: 'app-favoritos',
//   imports: [],
//   templateUrl: './favoritos.html',
//   styleUrl: './favoritos.css',
// })

//export class Favoritos {

  //favoritos: Producto[] = [];
  // el constructor conecta el componente con el servicio
  //constructor(
    //private favoritosService: favoritosService
  //) {
    //this.favoritos = this.favoritosService.obtenerFavoritos();
  //}

  //eliminarProductos(p: Producto) {
    //this.favoritosService.eliminarProductos(p);  Llama al servicio para eliminarlo
    //this.favoritos = this.favoritosService.obtenerFavoritos(); Actualiza la lista mostrada
  //}

//}
import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { favoritosService } from '../../servicios/favoritos';

// 👇 AGREGAR: import del servicio del carrito (ajustá la ruta si tu carpeta se llama distinto)
import { carritoService } from '../../servicios/carrito';

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {

  favoritos: Producto[] = [];

  constructor(
    private favoritosService: favoritosService,
    // 👇 AGREGAR: inyección del servicio del carrito, al lado del de favoritos
    private carritoService: carritoService
  ) {
    this.favoritos = this.favoritosService.obtenerFavoritos();
  }

  eliminarProductos(p: Producto) {
    this.favoritosService.eliminarProductos(p);
    this.favoritos = this.favoritosService.obtenerFavoritos();
  }

  agregarAlCarrito(p: Producto) {
    this.carritoService.agregarAcarrito(p);
    this.favoritosService.eliminarProductos(p);
    this.favoritos = this.favoritosService.obtenerFavoritos();
  }

}