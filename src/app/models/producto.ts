export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number; // MySQL lo devuelve como texto ("1500.00"); sirve igual en cuentas con Number(...)
    imagen: string;
}
