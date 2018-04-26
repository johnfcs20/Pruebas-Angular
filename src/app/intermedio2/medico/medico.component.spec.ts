import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';


describe('Medico Component', () => {
  let component: MedicoComponent;

  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicoService],
      imports: [HttpClientModule]
    });

    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;

  });

  it ('Debe de crearse el componente', () => {

    expect(component).toBeTruthy();

  });

  it ('Debe de retornar el saludo', () => {
    const nombre = 'Juan';
    const resp = component.saludarMedico(nombre);
    expect(resp).toContain(nombre);
  });


});


