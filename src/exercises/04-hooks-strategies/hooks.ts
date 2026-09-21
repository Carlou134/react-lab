// Ejercicio 04 — Estrategias con Hooks (custom hooks)
// Consigna completa en src/exercises/README.md

import type { Dispatch, SetStateAction } from "react";

// TODO: useToggle — recibe un valor inicial booleano, devuelve
// [valor, toggle] donde toggle invierte el valor.
export function useToggle(_initialState: boolean): [boolean, () => void] {
  // TODO: implementar (pista: useState + actualización funcional).
  return [false, () => {}];
}

// TODO: useLocalStorage — funciona como useState, pero lee el valor
// inicial de localStorage (de forma perezosa) y lo sincroniza en cada
// cambio con un useEffect.
export function useLocalStorage<T>(
  _key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
  // TODO: implementar (pista: useState(() => ...) + JSON.parse/JSON.stringify).
  return [initialValue, () => {}];
}
