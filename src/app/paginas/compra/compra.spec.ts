import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";
import { of } from "rxjs";
import { CarritoService } from "../../servicios/carrito";
import { CompraService } from "../../servicios/compra";
import { TicketService } from "../../servicios/ticket";
import { CompraComponent } from "./compra";

describe("Compra", () => {
  let component: CompraComponent;
  let fixture: ComponentFixture<CompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompraComponent],
      providers: [
        provideRouter([]),
        { provide: CarritoService, useValue: { ver: () => of([]) } },
        { provide: CompraService, useValue: { finalizar: () => of({ id_compra: 1 }) } },
        { provide: TicketService, useValue: { generar: () => of({}) } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
