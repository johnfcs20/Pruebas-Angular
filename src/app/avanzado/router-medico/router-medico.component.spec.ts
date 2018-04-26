import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Component } from '@angular/core';

class FakeRouter {
  navigate(params) {}
}


class FakeActivatedRoute {

 //  params: Observable<any> = Observable.empty();

 private subject = new Subject();

 push(valor) { this.subject.next(valor); }

 get params() {
   return this.subject.asObservable();
 }

}
describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [{provide: Router, useClass: FakeRouter}, {provide: ActivatedRoute, useClass: FakeActivatedRoute}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redireccionar a medico cuando se guarde', () => {
    const router = TestBed.get(Router);
    const spy = spyOn (router, 'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);

  });

  it('Debe de colocar el id = nuevo', () => {
    component = fixture.componentInstance;

    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);

    activatedRoute.push({id: 'nuevo'});

    expect(component.id).toBe('nuevo');
  });

});
