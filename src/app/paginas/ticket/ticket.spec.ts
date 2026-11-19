import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";
import { TicketService } from "../../servicios/ticket";
import { TicketComponent } from "./ticket";

describe("Ticket", () => {
  let component: TicketComponent;
  let fixture: ComponentFixture<TicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => "1" } } },
        },
        {
          provide: TicketService,
          useValue: {
            ver: () => of({
              id_compra: 1,
              numero_ticket: "TCK-000001",
              fecha: "2026-01-01",
              pdf_path: "uploads/tickets/TCK-000001.pdf",
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
