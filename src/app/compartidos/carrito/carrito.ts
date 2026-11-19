//carrito.ts (componente)
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../../servicios/carrito';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})

export class Carrito implements OnInit {

  items: any[] = [];

  constructor(
  private carritoService: CarritoService,
  private router: Router,
  private cdr: ChangeDetectorRef
) { }

  ngOnInit(): void {
    this.cargarCarrito();
  }

  // cargarCarrito(): void {
  //   this.carritoService.ver().subscribe(lista => (this.items = lista));
  // }

  cargarCarrito(): void {
    this.carritoService.ver().subscribe({
      next: (lista) => {
        console.log("Productos recibidos:", lista);

        this.items = lista;

        console.log("Contenido de items:", this.items);

        // Notifica a Angular que debe actualizar la vista.
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error("Error al cargar carrito:", error);
      }
    });
  }

  total(): number {
    return this.items.reduce((suma, i) => suma + Number(i.cantidad) * Number(i.precio_unitario), 0);
  }

  cambiarCantidad(item: any, cantidad: number): void {
    if (cantidad < 1) return;
    this.carritoService.actualizar(item.id_producto, cantidad)
      .subscribe(() => this.cargarCarrito());
  }

  quitar(idProducto: number): void {
    this.carritoService.eliminar(idProducto).subscribe(() => this.cargarCarrito());
  }

  vaciar(): void {
    this.carritoService.vaciar().subscribe(() => this.cargarCarrito());
  }

  finalizarCompra(): void {
    this.router.navigate(['/paginas/compra']);
  }
}
