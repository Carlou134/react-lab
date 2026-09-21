// Ejercicio 17 — Testing con Vitest
// Consigna completa en src/exercises/README.md

import { describe, it, expect } from 'vitest';
import { isValidReservationDate } from './dateRules';

describe('isValidReservationDate', () => {
  it.todo('acepta una fecha válida dentro del rango permitido');
  it.todo('rechaza una fecha en el pasado');
  it.todo('rechaza una fecha demasiado lejana en el futuro');
});

// TODO: además de estos tres, elegí un componente simple de un
// ejercicio anterior (por ejemplo el switch del ejercicio 04) y
// escribile, en un archivo aparte, un test de render con Testing
// Library que simule un clic y verifique que el resultado en pantalla
// cambia.
