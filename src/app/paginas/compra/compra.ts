//paginas/compra/compra.ts
import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { CarritoService } from "../../servicios/carrito";
import { CompraService } from "../../servicios/compra";
import { TicketService } from "../../servicios/ticket";

interface ItemCompra {
    id_producto: number;
    nombre: string;
    cantidad: number;
    precio_unitario: number | string;
}

@Component({
    selector: "app-compra",
    imports: [RouterLink],
    templateUrl: "./compra.html"
})

export class CompraComponent implements OnInit {
    items: ItemCompra[] = [];
    cargandoCarrito = true;
    procesando = false;
    compraRegistradaId: number | null = null;
    errorMensaje = "";
    mensajeTicket = "";

    constructor(
        private carrito: CarritoService,
        private compraService: CompraService,
        private ticketService: TicketService,
        private router: Router
    ) {
        console.log("CompraComponent se creó");
    }


        ngOnInit(): void {
        this.carrito.ver().subscribe({
            next: (lista: any) => {
                this.items = Array.isArray(lista) ? lista : (lista?.items ?? lista?.data ?? []);
                this.cargandoCarrito = false;
            },
            error: (error) => {
                console.error("Error al cargar el carrito para confirmar la compra:", error);
                this.errorMensaje = "No se pudo cargar el carrito. Intenta nuevamente.";
                this.cargandoCarrito = false;
            }
        });
    }



    total(): number {
        return this.items.reduce(
            (suma, item) => suma + Number(item.cantidad) * Number(item.precio_unitario),
            0
        );
    }

    finalizar(): void {
        if (this.procesando || this.items.length === 0 || this.compraRegistradaId !== null) {
            return;
        }

        this.procesando = true;
        this.errorMensaje = "";
        this.mensajeTicket = "";

        this.compraService.finalizar().subscribe({
            next: (respuesta) => {
                const idCompra = Number(respuesta?.id_compra);
                if (!Number.isSafeInteger(idCompra) || idCompra < 1) {
                    this.errorMensaje = "El servidor no devolvió un número de compra válido.";
                    this.procesando = false;
                    return;
                }

                this.compraRegistradaId = idCompra;
                this.generarTicket(idCompra);
            },
            error: (error) => {
                console.error("Error al registrar la compra:", error);
                this.errorMensaje = "No se pudo registrar la compra. Intenta nuevamente.";
                this.procesando = false;
            }
        });
    }

    reintentarTicket(): void {
        if (!this.procesando && this.compraRegistradaId !== null) {
            this.generarTicket(this.compraRegistradaId);
        }
    }

    private generarTicket(idCompra: number): void {
        this.procesando = true;
        this.mensajeTicket = "";

        this.ticketService.generar(idCompra).subscribe({
            next: () => {
                this.procesando = false;
                void this.router.navigate(["/ticket", idCompra]);
            },
            error: (error) => {
                console.error("La compra se registró, pero no se pudo generar el ticket:", error);
                this.mensajeTicket =
                    `La compra #${idCompra} se registró, pero no se pudo generar el ticket.`;
                this.procesando = false;
            }
        });
    }
}