import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaExternaComponent } from './transferencia-externa.component';

describe('TransferenciaExternaComponent', () => {
  let component: TransferenciaExternaComponent;
  let fixture: ComponentFixture<TransferenciaExternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferenciaExternaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferenciaExternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
