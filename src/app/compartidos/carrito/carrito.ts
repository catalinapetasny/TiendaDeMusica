// carrito.ts (COMPONENTE)

import { Component, OnInit } from '@angular/core';
import { carritoService } from '../../servicios/carrito';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',

})

export class Carrito
  implements OnInit {

  Carrito: any[] = [];   // Se usa any[] porque además de Producto tiene una propiedad extra llamada cantidad

  constructor(
    private carritoService: carritoService //Se usa private porque solo se necesita dentro de este componente
  ) { }

  // READ

  //ngOnInit: Se usa para obtener los productos del carrito cuando se abre la página y mostrarlos.
  ngOnInit() {
    this.Carrito = this.carritoService.obtenerCarrito();
  }

  // UPDATE
  aumentar(id: number) {
    this.carritoService.aumentarCantidad(id);
  }

  disminuir(id: number) {
    this.carritoService.disminuirCantidad(id);
  }

  // DELETE
  eliminar(id: number) {
    this.carritoService.eliminarProducto(id);
    this.Carrito = this.carritoService.obtenerCarrito();
  }

  vaciar() {
    this.carritoService.vaciarCarrito();
    this.Carrito = this.carritoService.obtenerCarrito();
  }

  comprar() {
    const confirmar = confirm("¿Confirmar compra?");
    if (confirmar) {
      const total = this.obtenerTotal();
      this.carritoService.finalizarCompra();
      this.Carrito = this.carritoService.obtenerCarrito();
      alert("¡Compra confirmada! ⚞^. .^⚟\n\nEn unos momentos comenzaremos a preparar tu pedido.\n\n¡Gracias por confiar en Black Cat Music :3! \n\nFactura: "+total);
    }
  }

  // Método para calcular el total acumulado
  obtenerTotal(): number {
    return this.Carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  }

}