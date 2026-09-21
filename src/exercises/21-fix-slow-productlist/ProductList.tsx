// Ejercicio 21 — Diagnosticar un Listado Lento (debugging)
// Consigna completa en src/exercises/README.md
//
// Este componente funciona, pero tiene un problema de rendimiento a
// propósito. NO lo reescribas desde cero: encontrá qué se repite sin
// necesidad y corregilo con lo que ya conocés (useMemo, useCallback,
// React.memo), sin cambiar lo que se ve en pantalla.
//
// Pista: fijate qué se recalcula cuando cambia algo que no debería
// afectar al resultado (por ejemplo, el estado "expanded").

import { useState } from 'react';

type Book = {
  id: number;
  title: string;
  pages: number;
};

type BookRowProps = {
  book: Book;
};

const BookRow = ({ book }: BookRowProps) => (
  <li>
    {book.title} ({book.pages} págs.)
  </li>
);

type BookListProps = {
  books: Book[];
};

export const BookList = ({ books }: BookListProps) => {
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState<'title' | 'pages'>('title');
  const [expanded, setExpanded] = useState(false);

  // Este filtrado y ordenamiento corre en CADA render, incluso al
  // alternar "expanded", que no tiene nada que ver con el resultado.
  const visible = books
    .filter((b) => b.title.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => {
      if (order === 'title') return a.title.localeCompare(b.title);
      return a.pages - b.pages;
    });

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />

      <select value={order} onChange={(e) => setOrder(e.target.value as 'title' | 'pages')}>
        <option value="title">Por título</option>
        <option value="pages">Por páginas</option>
      </select>

      <button onClick={() => setExpanded((v) => !v)}>
        {expanded ? 'Ocultar' : 'Mostrar'} total
      </button>
      {expanded && <p>Total: {visible.length}</p>}

      <ul>
        {visible.map((book) => (
          <BookRow key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
};

export { BookList as ProductList };
