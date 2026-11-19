import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";
import { of } from "rxjs";
import { CompraService } from "../../servicios/compra";
import { Compras } from "./compras";

describe("Compras", () => {
  let component: Compras;
  let fixture: ComponentFixture<Compras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compras],
      providers: [
        provideRouter([]),
        { provide: CompraService, useValue: { historial: () => of([]) } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Compras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
