// auth/registro/registro.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../servicios/auth';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class Registro {
  nombre = '';
  email = '';
  contrasena = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  registrar(): void {
    const datos = {
      nombre: this.nombre,
      email: this.email,
      contraseña: this.contrasena
    };

    this.auth.registro(datos).subscribe({
      next: () => {
        this.router.navigate(['/inicio-sesion']);
      },
      error: (err) => {
        this.error = err.error?.error || 'Error al registrar usuario';
      }
    });
  }
}