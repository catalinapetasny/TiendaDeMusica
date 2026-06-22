// carrito.service.ts

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
  agregarAcarrito(p: Producto) {

    const existe = this.Productos.find(prod => prod.id === p.id);

    if (existe) {
      existe.cantidad++;
    } else {
      this.Productos.push({ ...p, cantidad: 1 });
    }

    // ...p: Copia todos los datos del producto (nombre, precio, imagen, etc.) y le agrega cantidad = 1
  }

  // READ
  obtenerCarrito() {
    //Devuelve todos los productos
    return this.Productos;
  }

  // UPDATE
  aumentarCantidad(id: number) {
    const prod = this.Productos.find(p => p.id === id);
    //si existe aumenta en 1
    if (prod) {
      prod.cantidad++;
    }
  }

  disminuirCantidad(id: number) {
    const prod = this.Productos.find(p => p.id === id);

    // Solo disminuye si hay más de 1 para evitar cantidad negativa
    if (prod && prod.cantidad > 1) {
      prod.cantidad--;
    }

  }
  // DELETE
  eliminarProducto(id: number) {
     // Mantiene todos los productos excepto el seleccionado
    this.Productos = this.Productos.filter(p => p.id !== id);
  }

  vaciarCarrito() {
    //Elimina todos los productos del carrito
    this.Productos = [];
  }

  // confirmar la compra
  finalizarCompra() {
    // Simula compra realizada vaciando el carrito
    this.Productos = [];
  }

}