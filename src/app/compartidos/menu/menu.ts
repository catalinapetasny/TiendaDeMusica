import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../servicios/auth';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  constructor(public auth: AuthService, private router: Router) {}

  salir(): void {
    this.auth.logout();
    this.router.navigate(['/inicio-sesion']);
  }
}
