import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';
import {RouterLinkWithHref, RouterOutlet } from '@angular/router';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe teber un link a la pagina de medicos', () => {

    const elementos = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    console.log(elementos);

    let existe = false;

    for (const elem of elementos) {
      if (elem.attributes['routerLink'] === '/medicos') {
        existe = true;
        break;

      }
    }

    expect(existe).toBeTruthy();

  });
});
