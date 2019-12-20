import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalletrayectoComponent } from './detalletrayecto.component';

describe('DetalletrayectoComponent', () => {
  let component: DetalletrayectoComponent;
  let fixture: ComponentFixture<DetalletrayectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalletrayectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalletrayectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
