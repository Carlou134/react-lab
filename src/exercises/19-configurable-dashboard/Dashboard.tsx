// Ejercicio 19 — Editor de Página por Bloques
// Consigna completa en src/exercises/README.md

// TODO: definí 3 componentes de bloque simples (HeadingBlock,
// QuoteBlock, ImageBlock...) que reciban { text } — sin complicarlos.

// TODO: un catálogo que relacione el "kind" de un bloque con su
// componente. Ejemplo de forma:
// const blockCatalog: Record<string, React.ComponentType<{ text: string }>> = { ... }

// TODO: estado con la lista ordenada de bloques:
// { id: string, kind: string, text: string }[]

// TODO: funciones para insertar un bloque (elegido de una lista),
// eliminarlo por id y moverlo una posición arriba o abajo.

export function Dashboard() {
  // TODO: implementar.
  // Recorré la lista, buscá el componente en el catálogo según "kind" y
  // dibujalo. Si el kind no existe, mostrá un bloque de "tipo
  // desconocido" en vez de romper. Nada de un if/else por cada tipo.
  return null;
}
