# PF03 - TDD con Node.js, Vitest y CI

Proyecto Intermodular, 2º DAW. Dos funciones desarrolladas con TDD
(Red, Green, Refactor), revisadas con Pull Requests y probadas con
GitHub Actions.

## Objetivo
- `fibonacci(n)` en `src/fibonacci.js`
- `esPinValido(pin)` en `src/pin.js`

## Reparto
| Alumno | Nombre | Usuario GitHub | Tests | Código |
|--------|--------|----------------|-------|--------|
| A | Marco Iborra De Tiedra | @matcooidt | fibonacci | esPinValido |
| B | Daniel Enseñat Blaya | @blayaensenat | esPinValido | fibonacci |

## Instalación
    npm ci

## Pruebas
    npm test            # una pasada completa
    npm run test:watch  # modo watch (opcional)

Requiere Node.js 24 LTS.
