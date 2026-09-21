// Ejercicio 12 — Actualizaciones optimistas
// Consigna completa en src/exercises/README.md

// TODO: useMutation que "marca como favorito" un item. En onMutate,
// actualizá la caché de React Query de forma optimista (antes de que
// la mutación real termine). Guardá el estado previo para poder
// revertirlo.

// TODO: en onError, hacé el rollback usando el estado previo guardado
// en onMutate.

// TODO: en tu función de mutación fake, hacé que falle
// aproximadamente 50% de las veces (Math.random() < 0.5) para poder
// probar el rollback de verdad.

export function useToggleLike() {
  // TODO: implementar
}
