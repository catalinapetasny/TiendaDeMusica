// src/app/guard/admin.guard.ts
import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../servicios/auth";

export const adminGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  // Comprueba que esté logueado y sea admin
  if (auth.estaLogueado() && auth.esAdmin()) {
    return true;
  }

  // Si no cumple, redirige al inicio y bloquea el acceso
  router.navigate(["/inicio"]);
  return false;
};