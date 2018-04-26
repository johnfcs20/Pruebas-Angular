import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import {FormsModule} from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incrementador Component', () => {

  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(async(() => {

      TestBed.configureTestingModule({
      declarations: [ IncrementadorComponent ],
      imports: [FormsModule]


    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;

  }));


  it('Debe incrementar/decrementar en 5, con un click ene el boton', () => {

    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

    console.log(botones);

    botones[0].triggerEventHandler('click', null);
    expect(component.progreso).toBe(45);

    botones[1].triggerEventHandler('click', null);
    expect(component.progreso).toBe(50);

  });






});
