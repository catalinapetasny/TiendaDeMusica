//favoritos.service
import { Injectable } from "@angular/core";
import { Producto } from "../models/producto";

@Injectable({
  providedIn: "root",
})

export class favoritosService {
  Favoritos: Producto[] = []

  agregarAFavoritos(p: Producto) {
    const existe = this.Favoritos.find(prod => prod.id === p.id); 
      if (!existe) {
      this.Favoritos.push(p);
    }
  }

  obtenerFavoritos() {
    return this.Favoritos;
  }

  //Eliminar producto de favoritos
  eliminarProductos(p: Producto) {
    this.Favoritos = this.Favoritos.filter(prod => prod.id !== p.id);
  }
}