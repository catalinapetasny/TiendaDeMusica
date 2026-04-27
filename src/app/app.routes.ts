import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Favoritos } from './compartidos/favoritos/favoritos';
import { Contacto } from './paginas/contacto/contacto';
import { Productos } from './paginas/productos/productos';
import { Registro } from './auth/registro/registro';
import { Carrito } from './compartidos/carrito/carrito';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';


export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full'},
    
    //Acceso a las rutas
    { path: 'inicio', component: Inicio },
    { path: 'favoritos', component: Favoritos },
    { path: 'contacto', component: Contacto },
    { path: 'productos', component: Productos},
    { path: 'registro', component: Registro },
    { path: 'carrito', component: Carrito },
    { path: 'inicio-sesion', component: InicioSesion },

    { path: '**', redirectTo: 'inicio' }
];
