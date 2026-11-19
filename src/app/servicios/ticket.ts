import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface TicketDetalle {
  id_compra: number | string;
  numero_ticket: string;
  fecha: string;
  pdf_path: string;
}

@Injectable({ providedIn: "root" })

export class TicketService {

  private apiUrl = "http://localhost/api_proyecto/public/tickets";

  readonly baseArchivos = "http://localhost/api_proyecto/public/";

  constructor(
    private http: HttpClient
  ) { }

  // POST /tickets/generar/{id_compra}: le pide al backend que cree el PDF
  generar(idCompra: number): Observable<unknown> {
    return this.http.post<unknown>(`${this.apiUrl}/generar/${idCompra}`, {});
  }

  // GET /tickets/{id_compra}: trae los datos del ticket (número, fecha, ruta del PDF)
  ver(idCompra: number): Observable<TicketDetalle> {
    return this.http.get<TicketDetalle>(`${this.apiUrl}/${idCompra}`);
  }
}

export { TicketService as Ticket };