// auth/inicio-sesion/inicio-sesion.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../servicios/auth';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './inicio-sesion.html',
  styleUrls: ['./inicio-sesion.css']
})
export class InicioSesion {
  email = '';
  contrasena = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  ingresar(): void {
    this.auth.login(this.email, this.contrasena).subscribe({
      next: () => {
        this.router.navigate([this.auth.esAdmin() ? "/paginas/admin" : "/inicio"]);
      },
      error: () => {
        this.error = 'Email o contraseña incorrectos';
      }
    });
  }
}