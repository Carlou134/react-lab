// Ejercicio 00 — Fundamentos: Componentes y Props
// Consigna completa en src/exercises/README.md

import type React from "react";

export type TaskCardProps = {
  title: string;
  done?: boolean;
  priority?: string;
  onToggle: () => void;
  children?: React.ReactNode;
};

export function TaskCard({
  title,
  done = false,
  priority = "normal",
  onToggle,
  children,
}: TaskCardProps) {
  return(
    <>
    { done ? <h1>{title}</h1> : <h1><s>{title}</s></h1>}
    {children}
    <p>Priority: {priority}</p>
    <button onClick={onToggle}>{done ? "Undo" : "Complete"}</button>
    </>
  );
}
