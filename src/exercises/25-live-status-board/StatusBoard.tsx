// Ejercicio 25 — Tablero de Estado en Vivo
// Consigna completa en src/exercises/README.md

// TODO: API simulada: fetchServices() devuelve Promise<Service[]> con
// demora, valores cambiantes y fallo ocasional.
export interface Service {
  id: number;
  name: string;
  status: 'ok' | 'degraded' | 'down';
  latencyMs: number;
}

// TODO: store de Zustand con UI únicamente:
// statusFilter, sortBy ('name' | 'latency'), selectedIds, y una cola
// notifications con addNotification / dismissNotification.
// Persistí solo statusFilter y sortBy.

// TODO: useQuery con refetchInterval de 30_000 y manejo de error que
// empuje un aviso a la cola. Conservá los datos previos si falla.

export function StatusBoard() {
  // TODO: implementar.
  // - Lista filtrada y ordenada derivada (query + store).
  // - Botón de refresco manual y hora de la última actualización.
  // - Zona de avisos con botón para descartar.
  return null;
}
