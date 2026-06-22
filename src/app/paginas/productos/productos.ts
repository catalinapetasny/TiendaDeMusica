import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { RouterLink } from '@angular/router';
import { carritoService } from '../../servicios/carrito';
import { favoritosService } from '../../servicios/favoritos';

@Component({
  selector: 'app-productos',
  imports: [RouterLink],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})

export class Productos {

  constructor(
    private carritoService: carritoService,
    private favoritosService: favoritosService
  ) { }

  Productos: Producto[] = [
    {
      id: 1,
      nombre: "Three Cheers For Sweet Revenge.",
      descripcion: "My Chemical Romance - CD Oficial",
      precio: 20000,
      stock: 30,
      imagen: "assets/revenge.png",
      categoria: "album",
      disponibilidad: true,
    },
    {
      id: 2,
      nombre: "The Black Parade.",
      descripcion: "My Chemical Romance - CD Oficial",
      precio: 24000,
      stock: 30,
      imagen: "assets/tbp.jpg",
      categoria: "vinilo",
      disponibilidad: true,
    },
    {
      id: 3,
      nombre: "American Idiot.",
      descripcion: "Green Day - Vinilo Oficial",
      precio: 30000,
      stock: 15,
      imagen: "assets/american-idiot.jpg",
      categoria: "album",
      disponibilidad: true,
    },
    {
      id: 4,
      nombre: "Dookie",
      descripcion: "Green Day - CD Oficial",
      precio: 35000,
      stock: 25,
      imagen: "assets/dookie.png",
      categoria: "vinilo",
      disponibilidad: true,
    },
    {
      id: 5,
      nombre: "Meteora",
      descripcion: "Linkin Park - Vinilo Oficial",
      precio: 20000,
      stock: 15,
      imagen: "assets/meteora.png",
      categoria: "album",
      disponibilidad: true,
    },
    {
      id: 6,
      nombre: "Hybrid Theory",
      descripcion: "Linkin Park - Vinilo Oficial",
      precio: 30000,
      stock: 10,
      imagen: "assets/HT.jpg",
      categoria: "vinilo",
      disponibilidad: true,
    }
  ]

  //Agrega un producto al carrito
  agregarACarrito(p: Producto) {
    this.carritoService.agregarAcarrito(p)

    alert(`${p.nombre} agregado al carrito con éxito :3`);
  }

  //Agrega un producto a favoritos
  agregarAfavoritos(p: Producto) {
    this.favoritosService.agregarAFavoritos(p);
    alert(`${p.nombre} agregado a favoritos con éxito :3`);
  }

}