import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';

const MENSAJE = 'solo números enteros entre 0 y 78';

describe('fibonacci - casos válidos', () => {
  it.each([
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [5, 5],
    [10, 55],
    [20, 6765],
    [50, 12586269025],
  ])('fibonacci(%i) devuelve %i', (n, esperado) => {
    expect(fibonacci(n)).toBe(esperado);
  });

  it('devuelve el término del límite superior (78)', () => {
    expect(fibonacci(78)).toBe(8944394323791464);
  });

  it('devuelve un Number', () => {
    expect(typeof fibonacci(10)).toBe('number');
  });
});

describe('fibonacci - entradas inválidas', () => {
  it.each([
    ['negativo', -1],
    ['superior al límite', 79],
    ['decimal', 2.5],
    ['NaN', NaN],
    ['Infinity', Infinity],
    ['-Infinity', -Infinity],
    ['cadena numérica', '5'],
    ['null', null],
    ['undefined', undefined],
    ['booleano', true],
    ['array', [5]],
    ['objeto', {}],
  ])('lanza RangeError con %s', (_nombre, entrada) => {
    expect(() => fibonacci(entrada)).toThrow(RangeError);
    expect(() => fibonacci(entrada)).toThrow(new RangeError(MENSAJE));
  });
});
