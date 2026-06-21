//carrito.service
// import { Injectable } from "@angular/core";
// import { RouterLink } from "@angular/router";
// import { Producto } from "../models/producto";

// @Injectable({
//   providedIn: "root",
// // })

// export class carritoService {
//   Productos: Producto[] = []

//   carrito.service.ts

//   agregarAcarrito(p: Producto) {

//     const existe =
//       this.Productos.find(
//         prod => prod.id === p.id
//       );

//     if (!existe) {
//       this.Productos.push(p);
//     }

//   }

//   obtenerCarrito() {
//     return this.Productos
//   }

//   aumentarCantidad(id: number) {
//     const prod = this.Productos.find(p => p.id === id);
//     if (prod) {
//       prod.cantidad++;
//     }
//   }

//   disminuirCantidad(id: number) {
//     const prod = this.Productos.find(p => p.id !== id);
//     if (prod) {
//       prod.cantidad--
//     }
//   }

// eliminarProducto(id: number) {
//   this.Productos = this.Productos.filter(p => p.id !== id);
// }
// }

// carrito.service.ts

import { Injectable } from "@angular/core";
import { Producto } from "../models/producto";

@Injectable({
  providedIn: "root"
})

export class carritoService {

  Productos: (Producto & { cantidad: number })[] = [];

  // CREATE
  agregarAcarrito(p: Producto) {

    const existe = this.Productos.find(prod => prod.id === p.id);

    if (existe) {
      existe.cantidad++;
    } else {
      this.Productos.push({ ...p, cantidad: 1 });
    }
  }

  // READ

  obtenerCarrito() {
    return this.Productos;
  }

  // UPDATE

  aumentarCantidad(id: number) {
    const prod = this.Productos.find(p => p.id === id);
    if (prod) {
      prod.cantidad++;
    }
  }

  disminuirCantidad(id: number) {
    const prod = this.Productos.find(p => p.id === id);

    if (prod && prod.cantidad > 1) {
      prod.cantidad--;
    }

  }
  // DELETE
  eliminarProducto(id: number) {
    this.Productos = this.Productos.filter(p => p.id !== id);
  }

  vaciarCarrito() {
    this.Productos = [];
  }

  // confirmar la compra
  finalizarCompra() {
    this.Productos = [];
  }

}