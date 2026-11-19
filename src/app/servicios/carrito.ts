// src/app/servicios/carrito.ts
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class CarritoService {

  private apiUrl = "http://localhost/api_proyecto/public/carrito";

  constructor(private http: HttpClient) {}

  // Obtiene los productos del carrito.
  ver(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Agrega un producto al carrito.
  agregar(idProducto: number, cantidad: number): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/agregar`,
      { id_producto: idProducto, cantidad: cantidad }
    );
  }

  // Actualiza la cantidad de un producto.
  actualizar(idProducto: number, cantidad: number): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/actualizar/${idProducto}`,
      { cantidad: cantidad }
    );
  }

  // Elimina un producto del carrito.
  eliminar(idProducto: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/eliminar/${idProducto}`);
  }

  // Vacía completamente el carrito.
  vaciar(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/vaciar`);
  }

}