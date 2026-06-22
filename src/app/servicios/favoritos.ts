//favoritos.service
import { Injectable } from "@angular/core";
import { Producto } from "../models/producto";

@Injectable({
  providedIn: "root",
})

export class favoritosService {

  //Donde se guardan los productos favoritos
  Favoritos: Producto[] = []

  agregarAFavoritos(p: Producto) {
    // Busca si el producto ya fue agregado
    const existe = this.Favoritos.find(prod => prod.id === p.id); //find(): Busca un elemento dentro del array y devuelve el primero que coincida.
    //si no existe lo agrega al arreglo
    if (!existe) {
      this.Favoritos.push(p);
    }
  }

  obtenerFavoritos() {
    return this.Favoritos;
  }

  //Eliminar producto de favoritos
  eliminarProductos(p: Producto) {
    //Crea un nuevo arreglo sin el producto seleccionado
    this.Favoritos = this.Favoritos.filter(
      prod => prod.id !== p.id
    );
  }


}

