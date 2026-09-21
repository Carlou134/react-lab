// Ejercicio 20 — Encuestas Dirigidas por Esquema
// Consigna completa en src/exercises/README.md

// TODO: tipo de una pregunta del esquema:
// type Question = {
//   key: string;
//   prompt: string;
//   kind: 'short' | 'long' | 'rating' | 'choice';
//   choices?: string[]; // solo para kind: 'choice'
//   mandatory?: boolean;
// };

// TODO: el componente recibe:
// - schema: Question[]
// - onSubmit: (answers: Record<string, string | number>) => void
//
// Desafío extra: un generic que describa la forma de las respuestas
// (por ejemplo { favoriteColor: string; satisfaction: number }) para
// que TypeScript avise si el esquema declara una key inexistente.

export function GenericForm() {
  // TODO: implementar.
  // - Un único objeto de estado con las respuestas, indexado por "key".
  // - Dibujá el control adecuado según "kind" (input, textarea, número
  //   del 1 al 5, select/radio) sin escribir cada pregunta a mano.
  // - Si una pregunta obligatoria está vacía, bloqueá el envío y marcá
  //   esa pregunta puntual.
  // - Al enviar, llamá a onSubmit con todas las respuestas.
  return null;
}
