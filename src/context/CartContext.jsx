import { createContext, useState, useEffect } from "react";

// Context object used to share cart data across the app without prop drilling
const CartContext = createContext();

export function CartProvider({ children }) {
  // Load the saved cart from localStorage on first render (or start empty)
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // Keep localStorage in sync whenever the cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add a product to the cart, or bump its quantity if it's already there
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Remove a product from the cart entirely
  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  // Set a product's quantity directly, removing it if qty drops to 0
  const updateQty = (id, qty) =>
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty } : item))
        .filter((item) => item.qty > 0),
    );

  // Empty the cart completely
  const clearCart = () => setCart([]);

  // Total price of everything in the cart
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  // Total number of items in the cart (sum of quantities)
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        total,
        count,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
