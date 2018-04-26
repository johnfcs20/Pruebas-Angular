import { usuarioIngresado } from './boleanos';

describe ('Pruebas de boleanos', () => {

  it('Debe retornar true', () => {
    const resp = usuarioIngresado();
    expect(resp).toBe(true);
  });


});
