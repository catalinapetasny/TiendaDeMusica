// carrito.ts (COMPONENTE)

// import { Component } from '@angular/core';
// import { Producto } from '../../models/producto';
// import { carritoService } from '../../servicios/carrito';

// @Component({
//   selector: 'app-carrito',
//   imports: [],
//   templateUrl: './carrito.html',
//   styleUrl: './carrito.css',
// })

// export class Carrito {

//   Carrito: Producto[] = [];

//   constructor(
//     private carritoService: carritoService
//   ) {
//     this.Carrito =
//       this.carritoService.obtenerCarrito();
//   }

// }

// carrito.ts

import { Component, OnInit } from '@angular/core';
import { carritoService } from '../../servicios/carrito';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',

})

export class Carrito
  implements OnInit {

  Carrito: any[] = [];

  constructor(
    private carritoService: carritoService
  ) { }

  // READ

  ngOnInit() {
    this.Carrito = this.carritoService.obtenerCarrito();
  }

  // UPDATE
  aumentar(id: number) {
    this.carritoService.aumentarCantidad(id);
  }

  disminuir(id: number) {
    this.carritoService.disminuirCantidad(id);
  }

  // DELETE
  eliminar(id: number) {
    this.carritoService.eliminarProducto(id);
    this.Carrito = this.carritoService.obtenerCarrito();
  }

  vaciar() {
    this.carritoService.vaciarCarrito();
    this.Carrito = this.carritoService.obtenerCarrito();
  }

  comprar() {
    const confirmar = confirm("¿Confirmar compra?");
    if (confirmar) {
      this.carritoService.finalizarCompra();
      this.Carrito = this.carritoService.obtenerCarrito();

      alert("¡Compra confirmada! ⚞^. .^⚟\n\nEn unos momentos comenzaremos a preparar tu pedido.\n\n¡Gracias por confiar en Black Cat Music :3!")
    }
  }

  // Método para calcular el total acumulado
  obtenerTotal(): number {
    return this.Carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  }

}