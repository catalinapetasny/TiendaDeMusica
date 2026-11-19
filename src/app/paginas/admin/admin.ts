import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ProductService } from "../../servicios/productos";
import { Producto } from "../../models/producto";

@Component({
  selector: "app-admin",
  imports: [FormsModule],
  templateUrl: "./admin.html",
  styleUrl: "./admin.css",
})

export class Admin {
  productos: Producto[] = [];
  usuarios: any[] = [];
  ventas: any[] = [];

  form: Partial<Producto> = { nombre: "", descripcion: "", precio: 0, imagen: "" };

  archivoElegido: File | null = null;

  private api = "http://localhost/api_proyecto/public";

  constructor(
      private productService: ProductService, 
      private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.cargarTodo();
  }

  cargarTodo(): void {
    this.productService.listar().subscribe(l => (this.productos = l));
    this.http.get<any[]>(`${this.api}/usuarios/todos`).subscribe(l =>
      (this.usuarios = l));
    this.http.get<any[]>(`${this.api}/compras/todas`).subscribe(l => (this.ventas =
      l));
  }

  // Se ejecuta cuando el admin elige un archivo en <input type="file">
  alElegirArchivo(evento: Event): void {
    const input = evento.target as HTMLInputElement;
    // files es la lista de archivos elegidos; tomamos el primero (o null si no hay)
    this.archivoElegido = input.files && input.files.length ? input.files[0] : null
  }

  guardar(): void {
    if (this.archivoElegido) {
      // 1) sube la imagen 2) con el nombre que devuelve la API, guarda el producto
      this.productService.subirImagen(this.archivoElegido).subscribe(r => {
        this.form.imagen = r.imagen;
        this.guardarProducto();
      });
    } else {
      this.guardarProducto(); // sin imagen nueva: conserva la que ya tenía
    }
  }

  // Crea (POST) o edita (PUT) según el formulario tenga id o no
  private guardarProducto(): void {
    const accion = this.form.id
      ? this.productService.editar(this.form.id, this.form) // editar
      : this.productService.crear(this.form); // crear
    accion.subscribe(() => {
      // Al terminar: limpiamos el formulario y recargamos las listas
      this.form = { nombre: "", descripcion: "", precio: 0, imagen: "" };
      this.archivoElegido = null;
      this.cargarTodo();
    });
  }

  // Botón Editar: copia el producto al formulario para modificarlo
  editar(p: Producto): void {
    this.form = { ...p }; // "..." hace una copia, así no se modifica la lista original
  }
  
  // Botón Eliminar: borra el producto y recarga
  eliminar(id: number): void {
    this.productService.eliminar(id).subscribe(() => this.cargarTodo());
  }
}
