// Ejercicio 08 — useReducer + Context
// Consigna completa en src/exercises/README.md

// Contrato de datos del carrito.
export type CartItem = {
  id: number
  name: string
  price: number
}

export type CartState = {
  items: CartItem[]
}

// TODO: definí el tipo de las acciones (una unión discriminada):
// 'add' (con el item), 'remove' (con el id) y 'clear'.

// TODO: escribí la función reducer(state, action) => nuevoEstado.

// TODO: createContext para exponer { state, dispatch } al resto de
// la app, un CartProvider que use useReducer internamente y un hook
// useCart() que tire error si se usa fuera del provider.

// TODO: un componente que liste los productos del carrito (con botones
// de agregar, quitar y vaciar), y otro, en un lugar completamente
// distinto del árbol, que muestre solo el total de items — ambos
// consumiendo el mismo Context.

export const Exercise08 = () => {
  // TODO: implementar — envolvé todo en el CartProvider.
  return null
}
