import { Jugador2 } from './jugador2';


describe('Jugador 2 emit', () => {

  // tslint:disable-next-line:prefer-const
  let jugador: Jugador2;

 beforeEach(() => jugador = new Jugador2());

  it('Debe emitir un evento cuando recibe daño', () => {

    let nuevoHP = 0;

    jugador.hpCambia.subscribe(hp => {

      nuevoHP = hp;



    });

    jugador.reciDanio(1000);

    expect(nuevoHP).toBe(0);


  });

  it('Debe emitir un evento cuando recibe daño y sobrevivir si es menos de 100', () => {

    let nuevoHP = 0;

    jugador.hpCambia.subscribe(hp => { nuevoHP = hp; });

    jugador.reciDanio(50);

    expect(nuevoHP).toBe(50);


  });

});
