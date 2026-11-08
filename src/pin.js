const PATRON_PIN = /^(?:[0-9]{4}|[0-9]{6})$/;

export function esPinValido(pin) {
  return (
    typeof pin === 'string' &&
    PATRON_PIN.test(pin) &&
    new Set(pin).size > 1
  );
}
