import { Jugador } from './clases';
describe ('Pruebas de clase', () => {

  const jugador = new Jugador();

 // beforeAll();
//  beforeEach();

  // afterAll();
  // afterEach();

  it ('Debe retornar 80 de hp si recibe 20 de daño', () => {

   // const jugador = new Jugador();
    const resp = jugador.reciDanio(20);
    expect(resp).toBe(80);

  });


  xit ('Debe retornar 80 de hp si recibe 20 de daño', () => {

    // const jugador = new Jugador();
    const resp = jugador.reciDanio(50);
    expect(resp).toBe(50);

  });

  it ('Debe retornar 0 de hp si recibe 100 de daño o mas', () => {

    // const jugador = new Jugador();
    const resp = jugador.reciDanio(101);
    expect(resp).toBe(0);

  });

});
