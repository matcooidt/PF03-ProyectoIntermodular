export function esPinValido(pin) {
  if (typeof pin !== 'string') {
    return false;
  }
  if (!/^([0-9]{4}|[0-9]{6})$/.test(pin)) {
    return false;
  }
  const digitosDistintos = new Set(pin).size;
  return digitosDistintos > 1;
}
