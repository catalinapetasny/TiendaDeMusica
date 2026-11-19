//TICKET.TS (componente)
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TicketDetalle, TicketService } from "../../servicios/ticket";

@Component({
  selector: "app-ticket",
  templateUrl: "./ticket.html"
})

export class TicketComponent implements OnInit {
  ticket: TicketDetalle | null = null;
  urlPdf = "";
  cargando = true;
  errorMensaje = "";

  constructor(
    private ruta: ActivatedRoute,
    private ticketService: TicketService
  ) { }

  ngOnInit(): void {
    const id = Number(this.ruta.snapshot.paramMap.get("id"));
    if (!Number.isSafeInteger(id) || id < 1) {
      this.errorMensaje = "El identificador del ticket no es válido.";
      this.cargando = false;
      return;
    }

    this.ticketService.ver(id).subscribe({
      next: (ticket) => {
        this.cargando = false;
        if (!ticket?.pdf_path) {
          this.errorMensaje = "El servidor no devolvió el archivo del ticket.";
          return;
        }

        this.ticket = ticket;
        this.urlPdf = new URL(
          ticket.pdf_path.replace(/^\/+/, ""),
          this.ticketService.baseArchivos
        ).toString();
      },
      error: (error) => {
        console.error("Error al cargar el ticket:", error);
        this.errorMensaje = "No se pudo cargar el ticket.";
        this.cargando = false;
      }
    });
  }
}
