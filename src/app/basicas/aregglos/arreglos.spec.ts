import { obtenerRobots } from './arreglos';

describe ('Pruebas de arreglos', () => {
  it ('Debe de retornaar por lo menos 3 roboots', () => {
      const resp = obtenerRobots();

      expect(resp.length).toBeGreaterThanOrEqual(3);
  });

  it ('Debe de megaman y ultron', () => {
    const resp = obtenerRobots();

    expect(resp).toContain('megaman');
    expect(resp).toContain('ultron');
});
});
