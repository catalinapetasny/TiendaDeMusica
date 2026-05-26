import { Injectable } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Producto } from "../models/producto";

@Injectable({
  providedIn: "root",
})

export class Carrito {
  Productos: Producto[] = []
  
  agregarAcarrito(p: Producto){
    this.Productos.push(p)
  }

  obtenerCarrito () {
    return this.Productos
  }

  aumentarCantidad(id: number){
    const prod = this.Productos.find(p => p.id === id);
    if (prod) {
      // prod.cantidad++;
    }
  }

  disminuirCantidad(id: number){
    const prod = this.Productos.find(p => p.id !== id);
    if (prod) {
      //prod.cantidad--
    }
  }

  eliminarProducto(id: number) {
    this.Productos = this.Productos.filter(p => p.id !== id);
  }
}