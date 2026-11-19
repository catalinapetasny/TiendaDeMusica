import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ProductService } from "../../servicios/productos";
import { CarritoService } from "../../servicios/carrito";
import { FavoritosService } from "../../servicios/favoritos";
import { Producto } from "../../models/producto";

@Component({
  selector: "app-productos",
  imports: [FormsModule],
  templateUrl: "./productos.html",
  styleUrls: ["./productos.css"]
})

export class Productos implements OnInit {

  productos: Producto[] = [];
  buscar = "";

  constructor(
    private productService: ProductService,
    private carrito: CarritoService,
    private favoritosService: FavoritosService
  ) {}

  // Al abrir la página, carga los productos.
  ngOnInit(): void {
    this.cargar();
  }

  // Obtiene los productos desde la API.
  cargar(): void {

    this.productService.listar(this.buscar).subscribe({
      next: (lista) => {
        this.productos = lista;
      },
      error: (error) => {
        console.error("Error al cargar productos:", error);
      }
    });
  }

  // Agrega un producto al carrito.
  agregar(idProducto: number): void {

    console.log("Se ejecutó agregar()");
    console.log("ID del producto:", idProducto);

    this.carrito.agregar(idProducto, 1).subscribe({
      next: (respuesta) => {
        console.log("Respuesta del servidor:", respuesta);
        alert("Agregado al carrito");
      },
      error: (error) => {
        console.error("Error al agregar:", error);
      }
    });

  }

  favorito(idProducto: number): void {
    this.favoritosService.agregar(idProducto).subscribe(() => alert("Agregado a favoritos"));
  }

}
