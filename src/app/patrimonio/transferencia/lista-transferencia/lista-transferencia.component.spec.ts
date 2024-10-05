import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTransferenciaComponent } from './lista-transferencia.component';

describe('ListaTransferenciaComponent', () => {
  let component: ListaTransferenciaComponent;
  let fixture: ComponentFixture<ListaTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTransferenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
