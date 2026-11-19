import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { FavoritosService } from '../../servicios/favoritos';
import { CarritoService } from '../../servicios/carrito';

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})

export class Favoritos implements OnInit {

  favoritos: any[] = [];

  constructor(
    private favoritosService: FavoritosService,
    private carritoService: CarritoService
  ) { }

  // Al iniciar, carga los favoritos del usuario.
  ngOnInit(): void {
    this.cargar();
  }

  // Obtiene los favoritos desde la API.
  cargar(): void {
    this.favoritosService.listar().subscribe(lista => (this.favoritos = lista));
  }

  quitar(idProducto: number): void {
    this.favoritosService.eliminar(idProducto).subscribe(() => this.cargar());
  }

  // Agrega un producto al carrito y lo quita de favoritos.
  agregarAlCarrito(p: Producto): void {
    this.carritoService.agregar(p.id, 1).subscribe({
      next: () => {
        this.favoritosService.eliminar(p.id).subscribe({
          next: () => this.cargar(),
          error: (error) => console.error("Error al quitar favorito:", error)
        });
      },
      error: (error) => console.error("Error al agregar al carrito:", error)
    });
  }
}