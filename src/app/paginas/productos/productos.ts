import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [RouterLink],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  Productos: Producto[] = [
    {
      id: 1,
      nombre: "Three Cheers For Sweet Revenge.",
      descripcion: "My Chemical Romance",
      precio: 20000,
      stock: 30,
      imagen: "assets/revenge.png",
      categoria: "album",
      disponibilidad: true,
    },
    {
      id: 2,
      nombre: "The Black Parade.",
      descripcion: "My Chemical Romance",
      precio: 24000,
      stock: 30,
      imagen: "assets/tbp.jpg",
      categoria: "vinilo",
      disponibilidad: true,
    },
    {
      id: 3,
      nombre: "American Idiot.",
      descripcion: "Green Day",
      precio: 30000,
      stock: 15,
      imagen: "assets/american-idiot.jpg",
      categoria: "album",
      disponibilidad: true,
    },
    {
      id: 4,
      nombre: "Dookie",
      descripcion: "Green Day",
      precio: 35000,
      stock: 25,
      imagen: "assets/dookie.png",
      categoria: "vinilo",
      disponibilidad: true,
    },
    {
      id: 5,
      nombre: "Meteora",
      descripcion: "Linkin Park",
      precio: 20000,
      stock: 15,
      imagen: "assets/meteora.png",
      categoria: "album",
      disponibilidad: true,
    },
    {
      id: 6,
      nombre: "Hybrid Theory",
      descripcion: "Linkin Park",
      precio: 30000,
      stock: 10,
      imagen: "assets/HT.jpg",
      categoria: "vinilo",
      disponibilidad: true,
    },
    // {
    //   id: 7,
    //   nombre: "Danger Days",
    //   descripcion: "My Chemical Romance",
    //   precio: 19000,
    //   stock: 15,
    //   imagen: "assets/danger-days.png",
    //   categoria: "CD",
    //   disponibilidad: true,
    // }
  ]

}
