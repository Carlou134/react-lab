# Ejercicios de práctica

Cada carpeta tiene un archivo de arranque con TODOs — el objetivo es que vos escribas la implementación, no copiar una solución. Andá en orden: cada ejercicio se apoya en ideas del anterior.

Instalá cada dependencia recién cuando llegues al ejercicio que la necesita, no todas de una.

---

## 00 — Fundamentos: Componentes y Props

**Nivel:** Fundamentos · **Archivos:** `00-props-and-components-basics/App.tsx` + `00-props-and-components-basics/TaskCard.tsx`

Cubre todo lo visto en `01-Your First React Component.md`, `02-Components Render Other Components.md` y `03-Props.md` del wiki, en un solo mini-proyecto: una lista de tareas.

**Consigna:**
- `App` es un componente de función (PascalCase) que renderiza una lista de al menos 3 `TaskCard` — un componente que renderiza otros componentes.
- Cada `TaskCard` recibe: `title` (string, obligatoria), `done` (boolean, opcional, default `false`) y `priority` (string, opcional, default `'normal'`).
- `TaskCard` debe mostrar algo visualmente distinto según `done` sea `true` o `false` (por ejemplo, tachar el título o mostrar un ✓) — renderizado condicional basado en props.
- `TaskCard` también debe aceptar `children`: contenido extra (una nota) que `App` le pase entre etiquetas de apertura/cierre, mostrado debajo del título.
- Agregale a `TaskCard` una prop `onToggle` — una función que `App` define y pasa hacia abajo. Seguí la convención de nombres: el manejador se llama `handleToggle` en `App`, la prop se llama `onToggle`. Adjuntala a un `<button>` dentro de `TaskCard` para que el click la dispare (acordate: el `onClick` solo tiene efecto real cuando termina sobre un elemento HTML nativo, no sobre `TaskCard` en sí).

**Requisitos:**
- Cada componente exportado e importado correctamente entre archivos — nada de todo en uno solo.
- Ningún componente debe tener `done` hardcodeado adentro — viene de afuera como prop y cambia cuando `App` decide cambiarlo. (Para esto vas a necesitar un array en estado con `useState` en `App` — todavía no lo vimos en profundidad, pero alcanza con guardar el array de tareas y actualizarlo en `handleToggle`.)

**Terminado cuando:** podés hacer click en cualquier `TaskCard` y ver que cambia visualmente, sin que `TaskCard` sepa nada de cómo se actualiza ese estado — solo llama a la función que le pasaron.

---

## 01 — Composición vs Herencia

**Nivel:** Básico · **Archivo:** `01-composition-vs-inheritance/Panel.tsx`

Construí un componente `Panel` reutilizable que sirva como contenedor visual (fondo, borde, padding) para al menos tres casos de uso distintos: una tarjeta de perfil de usuario, una tarjeta de producto y una tarjeta de alerta/aviso.

**Requisitos:**
- `Panel` no debe saber nada del contenido interno (perfil/producto/alerta) — ese conocimiento vive en cada lugar donde se usa `Panel`, no en `Panel` mismo.
- Usá `children` para inyectar el contenido específico de cada caso, en lugar de props como `title`, `subtitle`, `icon`, `footer`...
- Agregá una prop opcional (por ejemplo `variant`) para variar el color del borde según el tipo de tarjeta.

**Pista:** si te encontrás escribiendo `if (type === 'profile') { ... } else if (type === 'product') ...` dentro de `Panel`, es señal de que estás usando props donde correspondería composición.

**Terminado cuando:** las tres tarjetas se renderizan con el mismo componente `Panel`, cada una con contenido completamente distinto pasado como `children`.

---

## 02 — Slots y children complejos

**Nivel:** Básico · **Archivo:** `02-slots-complex-children/Modal.tsx`

Construí un componente `Modal` con tres áreas bien diferenciadas: un header, un body y un footer con botones de acción. En vez de un único `children`, aceptá props separadas para cada slot (`header`, `children` para el body, `footer`), cada una recibiendo JSX arbitrario.

**Requisitos:**
- Usalo para armar al menos dos modales distintos (uno de confirmación con dos botones, otro informativo con un solo botón de cerrar), reutilizando el mismo componente `Modal`.

**Pista:** cada slot es simplemente una prop tipada como `ReactNode`.

**Terminado cuando:** podés cambiar completamente el contenido de cada slot sin tocar el código interno de `Modal`.

---

## 03 — Evitar Prop Drilling

**Nivel:** Básico · **Archivo:** `03-avoid-prop-drilling/App.tsx`

Armá una jerarquía de al menos 4 componentes anidados (`App` → `Layout` → `Sidebar` → `UserBadge`) donde el nombre del usuario logueado tiene que llegar desde `App` hasta `UserBadge`, pasando por todos los niveles intermedios aunque no lo usen. Implementalo así primero, a propósito, para sentir el problema.

Después, refactorizalo usando Context API (`createContext` + `useContext`, con un hook propio `useUser()`) para que solo `App` y `UserBadge` necesiten tocar el dato.

**Requisitos:**
- El refactor debe eliminar por completo la prop `user` de `Layout` y `Sidebar`.

**Terminado cuando:** podés agregar un quinto nivel intermedio sin tocar ni una línea relacionada con `user`.

---

## 04 — Estrategias con Hooks (custom hooks)

**Nivel:** Básico · **Archivo:** `04-hooks-strategies/hooks.ts`

Construí dos custom hooks:
- `useToggle(initialValue)` — devuelve un booleano y una función para invertirlo.
- `useLocalStorage(key, initialValue)` — funciona como `useState`, pero persiste el valor en `localStorage`.

Usalos juntos en un componente (por ejemplo, un switch de modo oscuro que recuerda la preferencia entre recargas).

**Requisitos:**
- Los hooks no deben tener ninguna referencia a un componente específico — tienen que ser genéricos y reutilizables en cualquier parte.

**Pista:** `useLocalStorage` necesita inicializar su estado leyendo `localStorage` de forma perezosa (con la forma función de `useState`: `useState(() => ...)`).

**Terminado cuando:** al recargar la página, el valor persistido en `localStorage` se mantiene.

---

## 05 — useMemo y useCallback

**Nivel:** Intermedio · **Archivo:** `05-use-memo-callback/ExpensiveList.tsx`

Armá un componente con una lista de al menos 1000 elementos y una función de filtrado "cara" (por ejemplo, que ordene y haga un cálculo con un bucle artificialmente lento). Envolvé ese cálculo en `useMemo` para que solo se recalcule cuando cambien sus dependencias reales, y envolvé cualquier función que le pases a un componente hijo memoizado con `useCallback`.

**Requisitos:**
- Agregá un estado no relacionado (por ejemplo un contador que no afecta la lista) y verificá, con el React DevTools Profiler, que actualizar ese contador **no** dispara el recálculo de la lista.

**Terminado cuando:** podés mostrar, con el Profiler, el antes (sin memoización, recalcula siempre) y el después (memoizado, no recalcula si no cambian las dependencias).

---

## 06 — React.memo + Profiler

**Nivel:** Intermedio · **Archivo:** `06-memo-profiler/HeavyChild.tsx`

Construí un componente padre con estado propio (por ejemplo un contador que se actualiza cada segundo con `setInterval`) que renderiza una lista de componentes hijos "pesados" (agregales un cálculo lento para notar el re-render). Envolvé los hijos en `React.memo` y verificá que dejan de re-renderizarse cuando el padre actualiza su contador, siempre que las props de los hijos no cambien.

**Requisitos:**
- Usá el Profiler de React DevTools para confirmar, con datos reales, la diferencia de renders antes y después de aplicar `React.memo`.

**Pista:** si las props que le pasás al hijo incluyen una función definida directamente en el render del padre, `React.memo` no va a evitar el re-render — necesitás combinarlo con `useCallback`.

**Terminado cuando:** podés describir lo que ves en el Profiler confirmando la mejora.

---

## 07 — Context API

**Nivel:** Intermedio · **Archivo:** `07-context-api/ThemeContext.tsx`

Implementá un `ThemeContext` (claro/oscuro) con: un `ThemeProvider`, un custom hook `useTheme()` que tire error si se usa fuera del provider, y memoización del valor del Provider con `useMemo` para evitar re-renders innecesarios de los consumidores.

**Requisitos:**
- Al menos tres componentes distintos, en distintos niveles de anidamiento, deben consumir el tema a través de `useTheme()`.

**Terminado cuando:** cambiar el tema actualiza visualmente a los tres componentes, y ninguno de ellos recibe el tema como prop manual.

---

## 08 — useReducer + Context

**Nivel:** Intermedio · **Archivo:** `08-use-reducer-context/CartContext.tsx`

Construí un carrito de compras simple (agregar producto, quitar producto, vaciar carrito) usando `useReducer` para la lógica de estado, expuesto a toda la aplicación a través de Context (estado + `dispatch`).

**Requisitos:**
- Al menos tres tipos de acciones en el reducer (`add`, `remove`, `clear`).
- Un componente que liste los productos del carrito, y otro, en un lugar completamente distinto del árbol, que muestre solo el total de items.

**Terminado cuando:** ambos componentes reflejan el mismo estado sin estar relacionados entre sí más que por el Context.

---

## 09 — Zustand

**Nivel:** Intermedio · **Archivo:** `09-zustand/cartStore.ts`

*Instalá primero:* `npm install zustand`

Reimplementá el mismo carrito de compras del ejercicio 08, pero ahora con Zustand, sin Context ni Provider.

**Requisitos:**
- Misma funcionalidad (agregar, quitar, vaciar).
- Usá selectores (`useCartStore(state => state.items)`) en lugar de traerte el store completo en cada componente.

**Terminado cuando:** podés escribir dos o tres líneas sobre qué se sintió más simple o más complicado comparado con la versión de Context+useReducer.

---

## 10 — Persistencia de estado

**Nivel:** Intermedio · **Archivo:** `10-state-persistence/persistedCartStore.ts`

Tomá el store de Zustand del ejercicio 09 (o el Context del ejercicio 08) y agregale persistencia en `localStorage`, para que el carrito no se vacíe al recargar la página.

**Requisitos:**
- Si usás Zustand, investigá el middleware `persist` (`import { persist } from 'zustand/middleware'`).
- Si preferís Context, hacelo a mano con `useEffect` + `localStorage.setItem`.

**Terminado cuando:** agregás productos al carrito, recargás la página (F5), y los productos siguen ahí.

---

## 11 — React Query

**Nivel:** Avanzado · **Archivo:** `11-react-query/UsersList.tsx`

*Instalá primero:* `npm install @tanstack/react-query`

Usando una API pública gratuita (por ejemplo `https://jsonplaceholder.typicode.com/users`) armá un componente que liste datos usando `useQuery`, mostrando estados de carga, error y éxito.

**Requisitos:**
- `queryKey` bien definido.
- Configurá al menos una opción de comportamiento (por ejemplo `staleTime` o `retry`).

**Terminado cuando:** podés simular un error (por ejemplo apuntando a una URL inválida) y ver el estado de error renderizado correctamente.

---

## 12 — Actualizaciones optimistas

**Nivel:** Avanzado · **Archivo:** `12-optimistic-updates/useToggleLike.ts`

Sobre el ejercicio 11 (o uno nuevo), implementá una acción de "marcar como favorito" usando `useMutation`, actualizando la UI de forma optimista antes de que la respuesta del servidor llegue, con rollback si la mutación falla.

**Requisitos:**
- Forzá un error deliberado en la mutación (por ejemplo, que falle un 50% de las veces con `Math.random()`) y confirmá que el rollback funciona visualmente.

**Terminado cuando:** en el caso de éxito, la UI cambia instantáneamente; en el caso de error, vuelve a su estado anterior.

---

## 13 — HOC vs Render Props

**Nivel:** Avanzado · **Archivo:** `13-hoc-render-props/withLoading.tsx`

Elegí una pieza de lógica reutilizable (por ejemplo, "mostrar un spinner mientras `isLoading` es true") e implementala **dos veces**: una como Higher-Order Component (`withLoading(Component)`), y otra como Render Prop (`<WithLoading isLoading={...}>{(data) => ...}</WithLoading>`).

**Requisitos:**
- Ambas versiones deben envolver el mismo componente de ejemplo y producir el mismo resultado visual.

**Terminado cuando:** podés explicar con tus palabras una ventaja concreta de cada enfoque frente al otro (por ejemplo, en términos de legibilidad del árbol en React DevTools).

---

## 14 — Code Splitting

**Nivel:** Avanzado · **Archivo:** `14-code-splitting/HeavyModule.tsx`

Elegí un componente "pesado" de los ejercicios anteriores (por ejemplo, la lista de 1000 elementos del ejercicio 05) y cargalo con `React.lazy` + `Suspense`, mostrando un fallback de carga mientras se descarga el chunk.

**Requisitos:**
- Verificá en la pestaña **Network** del navegador que ese componente se descarga en un archivo JS separado, y que no aparece en el bundle inicial.

**Terminado cuando:** podés mostrar, en Network, el chunk separado cargándose recién cuando el componente se muestra por primera vez.

---

## 15 — Error Boundaries

**Nivel:** Avanzado · **Archivo:** `15-error-boundaries/ErrorBoundary.tsx`

Construí un `ErrorBoundary` de clase (con `getDerivedStateFromError` y/o `componentDidCatch`) que envuelva una sección de tu app, y un componente que falle a propósito (por ejemplo, tirando un error si un contador supera cierto valor).

**Requisitos:**
- El resto de la aplicación (fuera del boundary) debe seguir funcionando normalmente cuando el componente hijo falla.
- El boundary debe mostrar una UI de fallback clara.

**Terminado cuando:** rompés el componente hijo a propósito y confirmás que solo esa sección se cae, mientras el resto de la página sigue viva.

---

## 16 — Formularios con Zod

**Nivel:** Avanzado · **Archivo:** `16-zod-forms/reservationSchema.ts`

*Instalá primero:* `npm install zod react-hook-form @hookform/resolvers`

Armá un formulario de reserva (nombre, email, fecha, cantidad de personas) validado con un schema de Zod, mostrando mensajes de error específicos por campo.

**Requisitos:**
- Al menos una validación de formato (email), una de rango (cantidad de personas entre 1 y 10) y una de campo requerido.

**Terminado cuando:** el formulario no permite enviarse si hay errores, y cada error se muestra junto al campo correspondiente (no como un mensaje genérico único).

---

## 17 — Testing con Vitest

**Nivel:** Avanzado · **Archivos:** `17-testing/dateRules.ts` + `17-testing/dateRules.test.ts`

*Instalá primero:* `npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom`

Elegí una función pura simple (podés usar el stub de `dateRules.ts`, que valida si una fecha de reserva es válida) y escribile tests unitarios con Vitest. Después, elegí un componente simple de un ejercicio anterior (por ejemplo el switch del ejercicio 04) y escribile un test de render con Testing Library que simule un clic y verifique que el resultado en pantalla cambia.

**Requisitos:**
- Al menos 3 tests para la función pura (caso normal, caso límite, caso inválido).
- Al menos 1 test de interacción para el componente.

**Terminado cuando:** `npm run test` corre y los tests pasan en verde.

---

## 18 — Centro de Avisos con Context

**Nivel:** Intermedio · **Archivo:** `18-toast-notifications/ToastContext.tsx`

Armá un centro de avisos para una app: mensajes breves que aparecen apilados en una esquina y que cualquier componente puede disparar sin recibir nada por props.

**Requisitos:**
- Un `ToastProvider` que mantenga en estado la cola de avisos visibles, con un tope de 4 al mismo tiempo (si llega uno más, se descarta el más viejo).
- Un hook `useToast()` que devuelva `showToast(message, type, durationMs?)`, con `type` de tipo `'success' | 'error' | 'info'`. Si no se pasa duración, usá 4000 ms; si es un `error`, que dure el doble.
- Cada aviso se cierra solo al cumplirse su tiempo y también con un botón "x" manual. Limpiá los temporizadores pendientes cuando el aviso se cierre a mano o el provider se desmonte.
- `useToast()` debe tirar un error claro si se usa fuera del provider.

**Terminado cuando:** dos componentes sin relación entre sí disparan avisos, se apilan sin pisarse, y al superar el tope el más antiguo desaparece.

---

## 19 — Editor de Página por Bloques

**Nivel:** Intermedio · **Archivo:** `19-configurable-dashboard/Dashboard.tsx`

A diferencia del `Modal` del ejercicio 02 (slots fijos y nombrados), acá el contenido es una **lista dinámica** de bloques que la persona arma en tiempo real, como en un editor de páginas.

**Requisitos:**
- Un catálogo (objeto o `Map`) que relacione el `kind` de un bloque (por ejemplo `'heading'`, `'quote'`, `'image'`) con el componente que lo dibuja.
- Estado con la lista de bloques actuales (`{ id, kind, text }`), en orden.
- Controles para insertar un bloque de un tipo elegido, eliminarlo y moverlo una posición hacia arriba o hacia abajo.
- El componente principal recorre la lista y resuelve cada bloque consultando el catálogo — sin una cadena de `if/else` o `switch` por tipo en el JSX. Si un `kind` no existe en el catálogo, mostrá un bloque de "tipo desconocido" en lugar de romper.

**Terminado cuando:** podés insertar, borrar y reordenar bloques, y sumar un cuarto tipo (por ejemplo `'divider'`) solo registrándolo en el catálogo, sin editar el componente principal.

---

## 20 — Encuestas Dirigidas por Esquema

**Nivel:** Avanzado · **Archivo:** `20-generic-form/GenericForm.tsx`

Construí un componente que reciba un esquema (un arreglo de preguntas) y dibuje la encuesta completa a partir de él, en lugar de escribir el JSX de cada pregunta a mano (como en el ejercicio 16).

**Requisitos:**
- Cada pregunta del esquema se describe con: `{ key, prompt, kind: 'short' | 'long' | 'rating' | 'choice', choices?, mandatory? }` (`choices` solo aplica a `kind: 'choice'`; `rating` es un número de 1 a 5).
- Las respuestas viven en un único objeto de estado, indexado por `key`.
- Si una pregunta obligatoria queda vacía, el envío se bloquea y se marca esa pregunta puntual.
- Al enviar, se invoca `onSubmit(answers)` con todas las respuestas.
- Tipá el componente con un **generic** que describa la forma de las respuestas, de modo que TypeScript se queje si el esquema declara una `key` que no existe en esa forma (por ejemplo `{ favoriteColor: string; satisfaction: number }`).

**Pista:** el tipado es la parte difícil: probá primero con `Record<string, unknown>` y afinalo de a poco hasta que el generic cierre.

**Terminado cuando:** dibujás dos encuestas distintas (una de satisfacción y una de inscripción a un taller) con el mismo componente, cambiando solo el esquema.

---

## 21 — Diagnosticar un Listado Lento (debugging)

**Nivel:** Intermedio · **Archivo:** `21-fix-slow-productlist/ProductList.tsx`

Este ejercicio **no parte de cero**: el archivo de arranque trae un listado de libros (`BookList`, exportado también como `ProductList`) que funciona, con un problema de rendimiento puesto a propósito. Tu trabajo es encontrarlo y corregirlo, no reescribirlo.

**Requisitos:**
- Encontrá qué trabajo se repite en cada render sin necesidad, incluso cuando lo que escribe o elige la persona no lo afecta.
- Corregilo con las herramientas que ya conocés (`useMemo`, `useCallback`, `React.memo`), sin alterar lo que se ve en pantalla.
- Añadí un contador de "renders" o usá el Profiler para comparar antes y después, y anotá los números como comentario.

**Terminado cuando:** podés señalar la línea exacta del problema y justificar por qué tu cambio lo resuelve.

---

## 22 — Gestión de Socios con React Query (CRUD)

**Nivel:** Avanzado · **Archivo:** `22-club-members-crud/MembersCrud.tsx`

Un paso más allá del ejercicio 11, que solo leía datos: acá cubrís el ciclo completo sobre una API simulada por vos (funciones que devuelvan Promises con una pequeña demora) para gestionar los socios de un club.

**Requisitos:**
- Una lista de socios cargada con `useQuery`, filtrable por texto; el filtro forma parte de la query key.
- Alta, edición y baja con tres `useMutation` independientes.
- Tras cada mutación exitosa, refrescá lo que corresponda invalidando las claves adecuadas (sin recargar a mano).
- Definí una **fábrica de query keys** (`userKeys`) con claves para todo, para listas (con filtro) y para detalle.
- Estado de carga y de error separado por operación: la lista, cada botón de acción y el formulario deben mostrar el suyo.
- Hacé que la API simulada falle de vez en cuando para poder ver los errores.

**Terminado cuando:** das de alta, editás y eliminás un socio, y la lista se actualiza sola en los tres casos, incluso con un filtro activo.

---

## 23 — Proyecto Integrador: Bitácora de Viajes (Zustand + React Query)

**Nivel:** Avanzado · **Archivo:** `23-travel-journal-integrador/TravelJournal.tsx`

Un cierre que junta varios temas en algo chico: una bitácora de viajes donde se publican entradas. La decisión clave es **dónde vive cada dato** — y tenés que poder defenderla.

**Estado de interfaz (Zustand):**
- Persona activa (simulada, con un rol `'editor'` o `'lector'`).
- Idioma de la interfaz (`'es' | 'en'`).
- Si el panel de filtros está desplegado.
- El idioma y el estado del panel deben sobrevivir a una recarga.

**Datos remotos (React Query):**
- Listado de entradas, con filtro por etiqueta.
- Detalle de una entrada.
- Crear, editar y borrar entradas (solo el rol `'editor'` ve esos botones), con la invalidación de caché que corresponda.

**Terminado cuando:** al comienzo del archivo hay un comentario de 3-4 líneas que explica por qué cada dato terminó en Zustand o en React Query, y no al revés.

---

## 24 — Seguimiento de Hábitos con Zustand

**Nivel:** Intermedio · **Archivo:** `24-habit-tracker-store/habitStore.ts`

*Instalá primero:* `npm install zustand`

Un paso más allá del carrito de los ejercicios 09 y 10: acá el store no solo guarda datos, también expone **valores derivados** y acciones de edición. Armá el store de una app de hábitos diarios.

**Requisitos:**
- Un hábito es `{ id, name, doneToday, streak }`. Acciones: crear, renombrar, borrar y marcar/desmarcar como hecho hoy (al marcar, `streak` sube en 1; al desmarcar, baja en 1 sin bajar de 0).
- Un filtro en el store (`'all' | 'done' | 'pending'`) y un selector que devuelva la lista ya filtrada. Los componentes deben suscribirse con selectores finos, no al store completo.
- Un selector derivado con el conteo de hábitos hechos sobre el total (por ejemplo `3 / 5`).
- Persistí en `localStorage` los hábitos y el filtro con el middleware `persist`, pero no las funciones.
- Al menos dos componentes independientes (la lista y un resumen en el encabezado) leyendo del mismo store.

**Pista:** si un selector devuelve un array nuevo en cada llamada, el componente se re-renderiza siempre; pensá dónde conviene calcular el filtrado.

**Terminado cuando:** creás, renombrás y marcás hábitos, recargás la página y todo sigue igual, y el resumen del encabezado se actualiza sin que la lista le pase nada.

---

## 25 — Tablero de Estado en Vivo

**Nivel:** Avanzado · **Archivo:** `25-live-status-board/StatusBoard.tsx`

*Instalá primero:* `npm install zustand @tanstack/react-query`

Un tablero que muestra el estado de varios servicios ficticios y se mantiene al día solo. La gracia está en repartir bien las responsabilidades: los datos remotos en React Query, las preferencias de pantalla en Zustand.

**Requisitos:**
- Una API simulada (Promises con demora) que devuelva la lista de servicios `{ id, name, status: 'ok' | 'degraded' | 'down', latencyMs }`, con valores que cambien entre llamadas y que falle de vez en cuando.
- `useQuery` con refresco automático cada 30 segundos (`refetchInterval`) y un botón para refrescar a mano. Mostrá cuándo fue la última actualización exitosa.
- Store de Zustand con la UI: filtro por estado, orden (`'name' | 'latency'`) y servicios seleccionados. El filtro y el orden se persisten; la selección no.
- Cuando una consulta falla, un aviso de error aparece en una cola de notificaciones que también vive en Zustand (con opción de descartarlo). Los datos anteriores deben seguir visibles mientras tanto.
- La lista visible (filtrada y ordenada) se calcula a partir de los datos de la query y del store, sin duplicar los datos remotos dentro de Zustand.

**Pista:** para acelerar tus pruebas, bajá temporalmente el intervalo a 3 segundos.

**Terminado cuando:** el tablero se refresca solo, un fallo de la API muestra un aviso sin vaciar la pantalla, y al recargar conservás el filtro y el orden elegidos.

---

## 26 — Carrito Resistente a Datos Corruptos

**Nivel:** Intermedio · **Archivo:** `26-resilient-cart-storage/cartReducer.ts`

Variante del ejercicio 08 centrada en lo que pasa cuando el almacenamiento falla. Armá el reducer de un carrito con persistencia manual y manejo de errores explícito.

**Requisitos:**
- Acciones tipadas como unión discriminada: `add`, `remove`, `setQuantity` (con `quantity >= 1`, si no, se rechaza) y `hydrate`.
- El total se calcula al vuelo a partir de los items, nunca se guarda como estado aparte.
- Una función `loadCart()` que lea de `localStorage`, valide la forma de los datos y devuelva un carrito vacío si el JSON está roto o tiene una forma inesperada (sin lanzar).
- Una función `saveCart()` envuelta en `try/catch`: si escribir falla (por ejemplo por cuota llena), el carrito sigue funcionando en memoria y se muestra un aviso.
- Un `CartProvider` y un hook `useCart()` que inicialice con `loadCart()` y guarde con un `useEffect` cuando cambien los items.

**Terminado cuando:** metés a mano un JSON inválido en `localStorage`, recargás y la app arranca con un carrito vacío en vez de romperse, y una cantidad inválida no altera el estado.
