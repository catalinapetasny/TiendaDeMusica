//servicios/producto.ts
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Producto } from "../models/producto";

@Injectable({
  providedIn: "root"
})

export class ProductService {

  private apiUrl = "http://localhost/api_proyecto/public/productos";

  constructor(private http: HttpClient) {}

  // Trae todos los productos o los filtra por nombre.
  listar(buscar: string = ""): Observable<Producto[]> {
    let params = new HttpParams();

    if (buscar) {
      params = params.set("buscar", buscar);
    }

    return this.http.get<Producto[]>(this.apiUrl, { params });
  }

  // Busca un producto por su ID.
  verUno(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  // Crea un producto nuevo.
  crear(producto: Partial<Producto>): Observable<any> {
    return this.http.post(this.apiUrl, producto);
  }

  // Modifica un producto existente.
  editar(id: number, producto: Partial<Producto>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, producto);
  }

  // Elimina un producto.
  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Sube la imagen de un producto.
  subirImagen(archivo: File): Observable<{ imagen: string }> {
    const datos = new FormData();
    datos.append("imagen", archivo);

    return this.http.post<{ imagen: string }>(
      `${this.apiUrl}/imagen`,
      datos
    );
  }
}
