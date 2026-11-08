import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/pin.js';

describe('esPinValido', () => {
  it.each(['0123', '1234', '123456', '000001'])(
    'acepta el PIN válido %j',
    (pin) => {
      expect(esPinValido(pin)).toBe(true);
    }
  );

  it.each(['', '1', '12', '123', '12345', '1234567'])(
    'rechaza una longitud incorrecta: %j',
    (pin) => {
      expect(esPinValido(pin)).toBe(false);
    }
  );

  it.each(['0000', '1111', '9999', '000000', '888888'])(
    'rechaza un PIN con todos los dígitos iguales: %j',
    (pin) => {
      expect(esPinValido(pin)).toBe(false);
    }
  );

  it.each([
    '12a4',
    ' 1234',
    '1234 ',
    '12 34',
    '+123',
    '-123',
    '1.23',
    '1,23',
    '12-3',
    '1234\n',
    '１２３４',
    '١٢٣٤'
  ])(
    'rechaza caracteres no permitidos: %j',
    (pin) => {
      expect(esPinValido(pin)).toBe(false);
    }
  );

  it.each([
    null,
    undefined,
    1234,
    true,
    false,
    [['1', '2', '3', '4']],
    {}
  ])(
    'rechaza valores que no sean cadenas: %j',
    (pin) => {
      expect(esPinValido(pin)).toBe(false);
    }
  );
});