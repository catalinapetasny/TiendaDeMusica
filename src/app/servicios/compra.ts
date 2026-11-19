import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface CompraFinalizada {
  id_compra: number | string;
}

export interface CompraHistorial extends CompraFinalizada {
  fecha?: string;
  total?: number;
}

@Injectable({
  providedIn: "root",
})
export class CompraService {
  private apiUrl = "http://localhost/api_proyecto/public/compras";

  constructor(private http: HttpClient) {}

  historial(): Observable<CompraHistorial[]> {
    return this.http.get<CompraHistorial[]>(this.apiUrl);
  }

  finalizar(): Observable<CompraFinalizada> {
    return this.http.post<CompraFinalizada>(`${this.apiUrl}/finalizar`, {});
  }
}

export { CompraService as Compra };
