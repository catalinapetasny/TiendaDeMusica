import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CompraHistorial, CompraService } from "../../servicios/compra";

@Component({
  selector: "app-compras",
  imports: [RouterLink],
  templateUrl: "./compras.html",
  styleUrl: "./compras.css",
})

export class Compras implements OnInit {
  compras: CompraHistorial[] = [];
  cargando = true;
  errorMensaje = "";
  
  constructor(
    private compraService: CompraService
  ) { }

  ngOnInit(): void {
    this.compraService.historial().subscribe({
      next: (lista) => {
        this.compras = lista;
        this.cargando = false;
      },
      error: (error) => {
        console.error("Error al cargar el historial de compras:", error);
        this.errorMensaje = "No se pudo cargar el historial de compras.";
        this.cargando = false;
      },
    });
  }
}
