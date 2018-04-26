import { mensaje } from './string';

 describe('Pruebas de string', () => {

  it('Debe regresar un string', () => {
    const resp = mensaje('Fernando');

    expect(typeof resp).toBe('string');
  });

  it('Debe retornar un saludo con el nombre enviado', () => {


   const nombre = 'Juan';
   const resp = mensaje(nombre);
    expect( resp ).toContain(nombre);
  });


 });
