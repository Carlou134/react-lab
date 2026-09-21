// Ejercicio 00 — Fundamentos: Componentes y Props
// Consigna completa en src/exercises/README.md

import type React from "react";

// Contrato de props de TaskCard:
// - title: string (obligatoria)
// - done: boolean (opcional, default false)
// - priority: string (opcional, default 'normal')
// - onToggle: función que se llama al hacer click (sin argumentos)
// - children: contenido extra opcional (una nota)
export type TaskCardProps = {
  title: string;
  done?: boolean;
  priority?: string;
  onToggle: () => void;
  children?: React.ReactNode;
};

// TODO: desestructurá las props (con los defaults de done y priority)
// en lugar de recibir `_props`.
export function TaskCard(_props: TaskCardProps) {
  // TODO: implementar.
  // - Mostrá el title. Si done es true, mostralo tachado o con un ✓.
  // - Mostrá priority en algún lado (una etiqueta, por ejemplo).
  // - Si te pasaron children, mostralos debajo del title.
  // - Agregá un <button> con onClick={onToggle}.
  return null;
}
