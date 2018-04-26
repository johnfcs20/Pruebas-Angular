import { incrementar } from './numeros';

describe('Prueba de numeros', () => {

    it('Mayor que 100', () => {
      const resp = incrementar(300);
      expect(resp).toBe(100);
    });

    it('+ si es menor que 100', () => {
      const resp = incrementar(50);
      expect(resp).toBe(51);
    });
});
