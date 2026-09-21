// Ejercicio 00 — Fundamentos: Componentes y Props
// Consigna completa en src/exercises/README.md

// TODO: importá TaskCard desde './TaskCard' (y useState de 'react').

// Contrato de datos de cada tarea.
export type Task = {
  id: number;
  title: string;
  done?: boolean;
  priority?: string;
};

// TODO: en AppExercise1, guardá un array de tareas en estado (useState),
// con al menos 3 tareas { id, title, done, priority }.

// TODO: escribí handleToggle(id) — actualiza el array cambiando el
// done de la tarea con ese id (sin mutar el array original).

// TODO: renderizá al menos 3 <TaskCard>, una por tarea (con key),
// pasándole las props correspondientes y onToggle={() => handleToggle(task.id)}.
// A al menos una de ellas pasale también children (una nota extra).

export default function AppExercise1() {
  // TODO: implementar
  return null;
}
