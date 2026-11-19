import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Favoritos } from './compartidos/favoritos/favoritos';
import { Contacto } from './paginas/contacto/contacto';
import { Productos } from './paginas/productos/productos';
import { Registro } from './auth/registro/registro';
import { Carrito } from './compartidos/carrito/carrito';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';
import { CompraComponent } from './paginas/compra/compra';
// Nuevos componentes requeridos para la integración completa de la API
import { Compras } from './paginas/compras/compras'; // Historial de compras
import { TicketComponent } from './paginas/ticket/ticket';       // Vista y descarga de PDF
import { Admin } from './paginas/admin/admin'; // Panel de administración
import { adminGuard } from './guard/admin.guard';       // Guard de seguridad admin

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full'},
    
    // Rutas principales de la aplicación
    { path: 'inicio', component: Inicio },
    { path: 'favoritos', component: Favoritos },
    { path: 'contacto', component: Contacto },
    { path: 'productos', component: Productos },
    { path: 'registro', component: Registro },
    { path: 'carrito', component: Carrito },
    { path: 'inicio-sesion', component: InicioSesion },
    // Rutas añadidas para compras, tickets y administración protegida
    { path: 'compras', component: Compras },
    { path: 'paginas/compra', component: CompraComponent },
    { path: 'compra', component: CompraComponent },
    { path: 'ticket/:id', component: TicketComponent },
    { 
        path: 'paginas/admin', 
        component: Admin, 
        canActivate: [adminGuard] 
    },

    { path: '**', redirectTo: 'inicio' }
];