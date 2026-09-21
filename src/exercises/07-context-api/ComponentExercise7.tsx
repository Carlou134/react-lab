// Ejercicio 07 — Context API
// Consigna completa en src/exercises/README.md

// Contrato del valor del contexto (tema actual + función para cambiarlo).
export type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

// TODO: createContext<ThemeContextType | undefined>(undefined).

// TODO: ThemeProvider — mantiene el estado del tema ('light' | 'dark')
// y memoiza el value que le pasa al Provider con useMemo.

// TODO: useTheme() — hook que envuelve useContext(ThemeContext) y
// tira un error si se usa fuera del ThemeProvider (context === undefined).

// TODO: al menos tres componentes distintos, en distintos niveles
// de anidamiento, que consuman el tema con useTheme() — ninguno debería
// recibirlo como prop manual. Uno de ellos debe tener un botón para
// cambiar el tema.

export const ComponentExercise7 = () => {
  // TODO: implementar — un único ThemeProvider envolviendo los tres
  // componentes (ojo: si usás un Provider por componente, no
  // comparten estado).
  return null;
};
