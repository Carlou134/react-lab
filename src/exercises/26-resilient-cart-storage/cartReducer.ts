// Ejercicio 26 — Carrito Resistente a Datos Corruptos
// Consigna completa en src/exercises/README.md

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// TODO: unión discriminada de acciones:
// export type CartAction =
//   | { type: 'add'; item: Omit<CartItem, 'quantity'> }
//   | { type: 'remove'; id: number }
//   | { type: 'setQuantity'; id: number; quantity: number }
//   | { type: 'hydrate'; items: CartItem[] };

// TODO: cartReducer(state: CartItem[], action: CartAction): CartItem[]
// Rechazá (devolvé el mismo estado) un setQuantity con quantity < 1.

// TODO: getTotal(items) — cálculo derivado, no se guarda en estado.

// TODO: loadCart(): CartItem[] — lee de localStorage, valida la forma
// y devuelve [] si el JSON está roto. No debe lanzar nunca.

// TODO: saveCart(items): boolean — try/catch; devuelve false si falla.

// TODO: CartProvider + useCart() (error claro fuera del provider).
// Inicializá con loadCart(), guardá con useEffect y mostrá un aviso
// si saveCart devuelve false.
