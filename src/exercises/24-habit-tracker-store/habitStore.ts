// Ejercicio 24 — Seguimiento de Hábitos con Zustand
// Consigna completa en src/exercises/README.md

// TODO: tipos exportados.
export type HabitFilter = 'all' | 'done' | 'pending';

export interface Habit {
  id: number;
  name: string;
  doneToday: boolean;
  streak: number;
}

// TODO: interfaz del store: habits, filter y las acciones
// addHabit, renameHabit, removeHabit, toggleHabit, setFilter.

// TODO: create<HabitState>()(persist(..., { name: 'habits', partialize })).
// Persistí solo habits y filter (no las funciones) con partialize.

// TODO: selectores exportados:
// - selectVisibleHabits(state): aplica el filtro
// - selectProgress(state): { done, total }
// Ojo con devolver arrays nuevos en cada llamada a un selector.

export function HabitTracker() {
  // TODO: implementar la lista y, en otro componente, el resumen del
  // encabezado, ambos leyendo del store con selectores finos.
  return null;
}
