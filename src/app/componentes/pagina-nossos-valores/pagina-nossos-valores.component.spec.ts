import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNossosValoresComponent } from './pagina-nossos-valores.component';

describe('PaginaNossosValoresComponent', () => {
  let component: PaginaNossosValoresComponent;
  let fixture: ComponentFixture<PaginaNossosValoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaNossosValoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaNossosValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
