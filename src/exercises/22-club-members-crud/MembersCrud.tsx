// Ejercicio 22 — Gestión de Socios con React Query (CRUD)
// Consigna completa en src/exercises/README.md

// TODO: API simulada en este mismo archivo: funciones que devuelvan
// Promises con una pequeña demora (setTimeout) y que fallen al azar
// de vez en cuando: fetchMembers(search), createMember, updateMember,
// deleteMember. Un socio: { id, name, plan }.

// TODO: fábrica de query keys:
// const userKeys = {
//   all: ['members'] as const,
//   list: (search: string) => [...userKeys.all, 'list', search] as const,
//   detail: (id: number) => [...userKeys.all, 'detail', id] as const,
// };

// TODO: useQuery con userKeys.list(search) para la lista filtrable.

// TODO: tres useMutation (alta, edición, baja). En cada onSuccess,
// invalidá las claves que correspondan para que la lista se refresque
// sola, incluso con un filtro activo.

export function MembersCrud() {
  // TODO: implementar.
  // - Carga/error propios para la lista, para cada acción y para el
  //   formulario de alta (no un único spinner global).
  // - Campo de búsqueda que alimente la query key.
  // - Un botón de editar y otro de eliminar por cada socio.
  return null;
}
