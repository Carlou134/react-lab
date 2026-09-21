// Ejercicio 06 — React.memo + Profiler
// Consigna completa en src/exercises/README.md

// TODO: HeavyChild recibe props y hace algo "pesado" al renderizar
// (un cálculo lento, o simplemente un console.log para notar cuándo
// se re-renderiza). Envolvelo con React.memo.

export const HeavyChild = () => {
  // TODO: implementar
  return null;
};

// TODO: en un componente padre aparte, agregá un estado que se
// actualice solo (por ejemplo con setInterval cada 1s) y renderizá
// una lista de HeavyChild. Confirmá con el Profiler que, mientras las
// props de los hijos no cambian, React.memo evita sus re-renders.
