// Ejercicio 00 — Fundamentos: Componentes y Props
// Consigna completa en src/exercises/README.md

import { useState } from "react";
import { TaskCard } from "./TaskCard";

export type Task = {
  id: number;
  title: string;
  done?: boolean;
  priority?: string;
};

export default function ExerciseComponent0() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "TASK-01",
      done: true,
      priority: "normal",
    },
    {
      id: 2,
      title: "TASK-02",
      done: false,
      priority: "normal",
    },
    {
      id: 3,
      title: "TASK-03",
      done: false,
      priority: "normal",
    },
  ]);

  // TODO: implementar
  function handleToggle(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  }

  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          <TaskCard
            title={t.title}
            done={t.done}
            priority={t.priority}
            onToggle={() => handleToggle(t.id)}
          >
            {!t.done && <p>Please complete {t.title}</p>}
          </TaskCard>
        </li>
      ))}
    </ul>
  );
}
