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
  return (
    <>
      {done ? (
        <h1>{title}</h1>
      ) : (
        <h1>
          <s>{title}</s>
        </h1>
      )}
      {children}
      <p>Priority: {priority}</p>
      <div className="p-4">
        <button onClick={onToggle} className="btn-primary hover:bg-violet-600">
          {done ? "Undo" : "Complete"}
        </button>
      </div>
    </>
  );
}
