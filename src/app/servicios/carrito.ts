import { Injectable } from "@angular/core";
import { Producto } from "../models/producto";

@Injectable({
  providedIn: "root"
})
export class carritoService {

  // Array que guarda los productos del carrito.
  // Usa Producto y además agrega cantidad
  Productos: (Producto & { cantidad: number })[] = [];

  // CREATE
  // 👇 ESTE es el método que llama el componente de favoritos
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

  finalizarCompra() {
    this.Productos = [];
  }

}