# React Practice

A hands-on workbook to practice core React concepts with TypeScript and Tailwind CSS. Each exercise is a small stub with a clear brief and `TODO`s. The goal is to write the implementation yourself, not to copy a solution.

The exercises follow a learning path from React fundamentals to server state, testing and a final integrative project. They accompany a set of study notes on React, Next.js and TypeScript.

## Stack

| Tool | Purpose |
| --- | --- |
| React 19 | UI library |
| TypeScript | Static typing |
| Vite | Dev server and bundler |
| Tailwind CSS | Styling (utility-first) |
| ESLint | Linting, including `eslint-plugin-react-hooks` |

Libraries needed by later exercises (Zustand, TanStack Query, Zod, React Hook Form, Vitest) are installed only when you reach the exercise that uses them.

## Getting started

```bash
pnpm install
pnpm dev
```

`npm` works too, but the lockfile in this project is managed by `pnpm`.

### Tailwind CSS setup

Tailwind is the styling approach for every exercise. If it is not configured yet in your copy, use the Vite plugin (Tailwind v4):

```bash
pnpm add tailwindcss @tailwindcss/vite
```

Register the plugin in `vite.config.ts`:

```ts
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

Import it once in your main CSS file:

```css
@import "tailwindcss";
```

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Starts the dev server with HMR |
| `pnpm build` | Type-checks and builds for production |
| `pnpm lint` | Runs ESLint |
| `pnpm preview` | Serves the production build locally |

## How to use this workbook

1. Open [`src/exercises/README.md`](src/exercises/README.md). It has the full brief for every exercise (in Spanish).
2. Work in order. Each exercise builds on ideas from the previous one.
3. Open the starter file of the exercise, read the `TODO`s and write the implementation.
4. Style your components with Tailwind utility classes.
5. Check the "Done when" criteria of the brief before moving on.
6. Install a dependency only when the exercise asks for it.

## Exercise map

| # | Topic | Level |
| --- | --- | --- |
| 00 | Components and props | Fundamentals |
| 01 | Composition vs inheritance | Basic |
| 02 | Slots and complex children | Basic |
| 03 | Avoiding prop drilling | Basic |
| 04 | Custom hooks (`useToggle`, `useLocalStorage`) | Basic |
| 05 | `useMemo` and `useCallback` | Intermediate |
| 06 | `React.memo` and the Profiler | Intermediate |
| 07 | Context API | Intermediate |
| 08 | `useReducer` + Context | Intermediate |
| 09 | Zustand | Intermediate |
| 10 | State persistence | Intermediate |
| 11 | React Query | Advanced |
| 12 | Optimistic updates | Advanced |
| 13 | HOC vs render props | Advanced |
| 14 | Code splitting | Advanced |
| 15 | Error boundaries | Advanced |
| 16 | Forms with Zod | Advanced |
| 17 | Testing with Vitest | Advanced |
| 18 | Notification center with Context | Intermediate |
| 19 | Block-based page editor | Intermediate |
| 20 | Schema-driven surveys (generics) | Advanced |
| 21 | Diagnose a slow list (debugging) | Intermediate |
| 22 | Club members CRUD with React Query | Advanced |
| 23 | Integrative project: travel journal (Zustand + React Query) | Advanced |
| 24 | Habit tracker with a Zustand store (derived selectors) | Intermediate |
| 25 | Live status board (polling + Zustand UI state) | Advanced |
| 26 | Resilient cart storage (reducer + corrupted data) | Intermediate |

## Project structure

```text
src/
  exercises/
    README.md                     # Briefs for every exercise
    00-props-and-components-basics/
    01-composition-vs-inheritance/
    ...
    23-travel-journal-integrador/
    24-habit-tracker-store/
    25-live-status-board/
    26-resilient-cart-storage/
  App.tsx
  main.tsx
```

## Status

Work in progress. The exercises are being solved one by one, in order.
