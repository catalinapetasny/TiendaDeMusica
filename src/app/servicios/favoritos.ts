
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class FavoritosService {

  private apiUrl = "http://localhost/api_proyecto/public/favoritos";

  constructor(private http: HttpClient) {}

  // Obtiene los favoritos del usuario.
  listar(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Agrega un producto a favoritos.
  agregar(idProducto: number): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/agregar`,
      { id_producto: idProducto }
    );
  }

  // Elimina un producto de favoritos.
  eliminar(idProducto: number): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}/eliminar/${idProducto}`
    );
  }

}
