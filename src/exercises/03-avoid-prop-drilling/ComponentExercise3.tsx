// Ejercicio 03 — Evitar Prop Drilling
// Consigna completa en src/exercises/README.md

// Paso 1: armá la jerarquía App -> Layout -> Sidebar -> UserBadge
// pasando el nombre de usuario como prop a través de TODOS los niveles,
// aunque Layout y Sidebar no lo usen. A propósito: es para sentir el dolor.

// TODO: implementar la versión con prop drilling primero
// (Layout, Sidebar y UserBadge reciben `username: string` por props).

// Paso 2 (una vez que la versión anterior funciona): creá un
// contexto de usuario con createContext + un hook propio useUser(),
// y refactorizá para que Layout y Sidebar ya no reciban ni reenvíen
// la prop del usuario.

// Contrato del valor del contexto.
export type UserContextType = {
  username: string;
  setUsername: (username: string) => void;
};

// TODO: createContext<UserContextType | undefined>(undefined).

// TODO: useUser() — envuelve useContext y tira error si se usa fuera
// del UserProvider.

// TODO: UserProvider — guarda el username en estado (useState) y
// memoiza el value con useMemo.

// TODO: componentes Layout, Sidebar y UserBadge (niveles 2, 3 y 4).
// Solo UserBadge (y el nivel 1) deben tocar el dato del usuario.

export default function ComponentExercise3() {
  // TODO: implementar — armá el árbol completo y agregá un botón que
  // cambie el nombre de usuario.
  return null;
}
