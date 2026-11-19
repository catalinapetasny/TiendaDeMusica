import { Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiUrl = "http://localhost/api_proyecto/public/usuarios";
  private usuarioActual = signal<any>(JSON.parse(localStorage.getItem("usuario") || "null"));
  constructor(private http: HttpClient) { }

  registro(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, datos);
  }

  login(email: string, contrasena: string): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/login`, {
        email: email,
        contraseña: contrasena
      })
      .pipe(
        tap((respuesta: any) => {
          localStorage.setItem("token", respuesta.token);
          localStorage.setItem("usuario", JSON.stringify(respuesta.usuario));
          this.usuarioActual.set(respuesta.usuario);
        })
      );
  }

  logout(): void {
    // Elimina el token de autenticación.
    localStorage.removeItem("token");

    // Elimina los datos del usuario.
    localStorage.removeItem("usuario");
  }

  // Obtiene el token que está guardado en el navegador.
  // Si no existe, devuelve null.
  getToken(): string | null {
    return localStorage.getItem("token");
  }

  // Comprueba si hay un token guardado.
  // Si existe, devuelve true; de lo contrario, false.
  estaLogueado(): boolean {
    return this.getToken() !== null;
  }

  // Comprueba si el usuario guardado tiene el rol de administrador.
  esAdmin(): boolean {
    const usuario = JSON.parse(localStorage.getItem("usuario") || "{}");
    return usuario.rol === "admin";
  }

  nombreUsuario(): string {
    return this.usuarioActual()?.nombre ?? "";
  }

}
