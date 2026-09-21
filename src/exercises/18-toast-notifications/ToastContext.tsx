// Ejercicio 18 — Centro de Avisos con Context
// Consigna completa en src/exercises/README.md

// TODO: tipo de un aviso: { id, message, type, durationMs }
// (type: 'success' | 'error' | 'info')

// TODO: createContext que exponga showToast(message, type, durationMs?)
// y, para el contenedor, la lista de avisos visibles y una función
// dismissToast(id).

// TODO: ToastProvider — guarda la cola de avisos en estado, con un tope
// de 4 visibles (si entra uno más, se descarta el más viejo).
// Duración por defecto: 4000 ms; los 'error' duran el doble.
// Guardá los temporizadores (por ejemplo en un useRef con un Map por id)
// para poder cancelarlos al cerrar a mano o al desmontar el provider.

// TODO: useToast() — hook que envuelve useContext y tira un error claro
// si se usa fuera del ToastProvider.

// TODO: ToastContainer — dibuja los avisos apilados en una esquina
// (position: fixed), cada uno con un botón "x" para cerrarlo.
